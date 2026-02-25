import * as fs from "fs";
import * as path from "path";

const PROJECT_ROOT = path.resolve(__dirname, "..");
const LOGOS_DIR = path.join(PROJECT_ROOT, "src", "logos");
const GENERATED_DIR = path.join(PROJECT_ROOT, "src", "generated");
const LOGOS_JSON_PATH = path.join(GENERATED_DIR, "logos.json");

if (!fs.existsSync(GENERATED_DIR)) fs.mkdirSync(GENERATED_DIR, { recursive: true });

// ------------------------
// Helpers
// ------------------------
function extractViewBox(svg: string) {
  const match = svg.match(/viewBox="([^"]+)"/);
  return match ? match[1] : "0 0 24 24";
}

/**
 * CSS property names (both kebab-case and camelCase) that are NOT part of the
 * standard CSS spec and therefore don't exist in csstype's `Properties` type
 * (which backs React's `CSSProperties`). Emitting these in a style={{}} object
 * causes TS2353 errors in dts builds. They come from Inkscape and other editors.
 */
const NON_STANDARD_CSS_PROPS = new Set([
  "shape-padding",    "shapePadding",      // Inkscape shape extension
  "solid-color",      "solidColor",        // SVG 1.2 draft, not in csstype
  "solid-opacity",    "solidOpacity",
  "block-progression","blockProgression",  // old CSS Writing Modes draft
  "flow-from",        "flowFrom",          // CSS Regions (abandoned)
  "flow-into",        "flowInto",
  "region-fragment",  "regionFragment",
  "wrap-flow",        "wrapFlow",          // CSS Exclusions (abandoned)
  "wrap-through",     "wrapThrough",
  "enable-background","enableBackground",  // SVG 1.1 filter primitive — removed in SVG 2
  "color-profile",    "colorProfile",      // SVG 1.1 — removed in SVG 2
  "glyph-orientation-horizontal", "glyphOrientationHorizontal", // SVG 1.1 deprecated
  "glyph-orientation-vertical",   "glyphOrientationVertical",
  "kerning",                                                     // SVG 1.1 deprecated
]);

/**
 * Some standard CSS properties accept only a restricted set of values in
 * csstype. SVG 1.1 used legacy values that were never adopted into CSS.
 * Map camelCase prop name -> set of disallowed values to drop.
 */
const INVALID_CSS_VALUES: Record<string, Set<string>> = {
  // SVG 1.1 writing-mode values — CSS only allows horizontal-tb, vertical-rl,
  // vertical-lr, sideways-rl, sideways-lr. lr-tb, rl-tb, tb-rl etc. are SVG-only
  // and not in csstype's WritingMode union, causing TS2322.
  writingMode: new Set(["lr-tb", "rl-tb", "tb-rl", "tb-lr", "lr", "rl", "tb"]),
};

/**
 * Parse and convert a raw CSS style string into a JSX style object string.
 * e.g. "fill:#fff;fill-rule:nonzero" -> `{{fill:'#fff',fillRule:'nonzero'}}`
 * Returns "" if no valid entries found (caller removes the attribute entirely).
 *
 * Uses JSON.stringify for values so any embedded quotes are safely escaped.
 * Deduplicates keys — last value wins (matches CSS cascade behavior).
 */
function cssToJsxStyleObject(styleStr: string): string {
  const seen = new Map<string, string>();

  styleStr.split(";").forEach((prop: string) => {
    if (!prop.trim()) return;

    const colonIdx = prop.indexOf(":");
    if (colonIdx === -1) return;

    const key = prop.slice(0, colonIdx).trim();
    // Allow multi-colon values (e.g. color(display-p3 0 0.2 0.24))
    const val = prop.slice(colonIdx + 1).trim();

    if (!key || !val) return;

    // Skip inkscape-specific and vendor-prefixed props
    if (key.startsWith("-inkscape") || key.startsWith("inkscape")) return;
    if (key.startsWith("-webkit") || key.startsWith("-moz") || key.startsWith("-ms")) return;

    // camelCase conversion (must come before the non-standard check so we can
    // match both the kebab-case and camelCase forms)
    const camelKey = key.replace(/-([a-z])/g, (_: string, c: string) => c.toUpperCase());

    // Skip non-standard CSS properties not present in React's CSSProperties /
    // csstype's Properties type. These are typically SVG-editor extensions.
    if (NON_STANDARD_CSS_PROPS.has(key) || NON_STANDARD_CSS_PROPS.has(camelKey)) return;

    // Skip invalid values for known properties (e.g. SVG 1.1 writing-mode values
    // like "lr-tb" that csstype's union types don't include, causing TS2322).
    if (INVALID_CSS_VALUES[camelKey]?.has(val)) return;

    // JSON.stringify safely escapes any quotes/special chars inside the value
    seen.set(camelKey, JSON.stringify(val));
  });

  if (seen.size === 0) return "";

  const entries = Array.from(seen.entries()).map(([k, v]) => `${k}:${v}`);
  return `{{${entries.join(",")}}}`;
}

/**
 * Replace style="..." (and style='...') attributes with style={{...}} JSX equivalents.
 *
 * Uses a manual scan instead of a simple regex so we correctly handle:
 *  - style values that contain url(#id) with special chars
 *  - &quot; HTML entities embedded in attribute values
 *  - SVGs that use single-quoted attributes
 */
function convertStyleAttributes(svg: string): string {
  // Handle style='...' (single-quoted) first
  svg = svg.replace(/style='([^']*)'/g, (_, styleStr) => {
    const obj = cssToJsxStyleObject(styleStr);
    return obj ? `style=${obj}` : "";
  });

  // Handle style="..." (double-quoted) with a manual scanner
  let result = "";
  let i = 0;
  const needle = 'style="';

  while (i < svg.length) {
    const styleIdx = svg.indexOf(needle, i);
    if (styleIdx === -1) {
      result += svg.slice(i);
      break;
    }

    result += svg.slice(i, styleIdx);

    const valueStart = styleIdx + needle.length;
    let end = valueStart;

    // Scan to find the real closing double-quote, honoring &quot; sequences
    while (end < svg.length && svg[end] !== '"') {
      if (svg.startsWith("&quot;", end)) {
        end += 6;
      } else {
        end++;
      }
    }

    const rawValue = svg.slice(valueStart, end);
    // Decode &quot; entities before processing
    const styleStr = rawValue.replace(/&quot;/g, '"');
    const obj = cssToJsxStyleObject(styleStr);
    result += obj ? `style=${obj}` : "";

    i = end + 1; // skip the closing "
  }

  return result;
}

/**
 * Deduplicate attributes within each JSX/SVG tag using a state machine.
 *
 * Why a state machine instead of regex:
 *   Regex patterns that match tag contents via [^>]* break on `>` characters
 *   inside attribute values, e.g. style={{fill:'url(#a)'}}.
 *   This parser tracks quoted strings and JSX brace expressions to find real
 *   tag boundaries and attribute boundaries safely.
 *
 * Last occurrence of each attribute name wins.
 */
function deduplicatePlainAttributes(svg: string): string {
  const out: string[] = [];
  let i = 0;

  while (i < svg.length) {
    if (svg[i] !== "<") {
      out.push(svg[i++]);
      continue;
    }

    const tagStart = i;
    i++; // skip <

    // Read tag name (may start with /, !, ?)
    let tagName = "";
    while (i < svg.length && !/[\s/>]/.test(svg[i])) {
      tagName += svg[i++];
    }

    // Pass through comments, CDATA, doctype, closing tags, processing instructions
    if (
      tagName.startsWith("!") ||
      tagName.startsWith("?") ||
      tagName.startsWith("/") ||
      tagName === ""
    ) {
      const end = svg.indexOf(">", i);
      if (end === -1) {
        out.push(svg.slice(tagStart));
        i = svg.length;
      } else {
        out.push(svg.slice(tagStart, end + 1));
        i = end + 1;
      }
      continue;
    }

    // Collect attributes using a state machine
    const attrs: Array<{ name: string; raw: string }> = [];
    let selfClose = false;

    while (i < svg.length) {
      // Skip whitespace
      while (i < svg.length && /\s/.test(svg[i])) i++;

      if (i >= svg.length) break;
      if (svg[i] === ">") { i++; break; }
      if (svg[i] === "/" && svg[i + 1] === ">") { selfClose = true; i += 2; break; }

      // Read attribute name
      let attrName = "";
      while (i < svg.length && !/[\s=/>]/.test(svg[i])) {
        attrName += svg[i++];
      }
      if (!attrName) { i++; continue; } // safety: skip unexpected char

      // Skip whitespace between name and =
      while (i < svg.length && svg[i] === " ") i++;

      if (i >= svg.length || svg[i] !== "=") {
        // Boolean attribute (no value)
        attrs.push({ name: attrName, raw: attrName });
        continue;
      }
      i++; // skip =

      let rawValue = "=";

      if (svg[i] === '"') {
        rawValue += '"';
        i++;
        while (i < svg.length && svg[i] !== '"') rawValue += svg[i++];
        rawValue += '"';
        if (i < svg.length) i++; // skip closing "
      } else if (svg[i] === "'") {
        rawValue += "'";
        i++;
        while (i < svg.length && svg[i] !== "'") rawValue += svg[i++];
        rawValue += "'";
        if (i < svg.length) i++; // skip closing '
      } else if (svg[i] === "{") {
        // JSX expression — balance braces (may contain nested {})
        let depth = 0;
        while (i < svg.length) {
          const ch = svg[i];
          rawValue += ch;
          i++;
          if (ch === "{") depth++;
          else if (ch === "}") {
            depth--;
            if (depth === 0) break;
          }
        }
      } else {
        // Unquoted value
        while (i < svg.length && !/[\s/>]/.test(svg[i])) rawValue += svg[i++];
      }

      attrs.push({ name: attrName, raw: attrName + rawValue });
    }

    // Deduplicate: last occurrence of each attr name wins
    const seen = new Map<string, string>();
    for (const attr of attrs) seen.set(attr.name, attr.raw);

    const attrStr = Array.from(seen.values()).join(" ");
    const closing = selfClose ? " />" : ">";
    out.push(`<${tagName}${attrStr ? " " + attrStr : ""}${closing}`);
  }

  return out.join("");
}

function extractInnerSVG(svg: string): string {
  // Extract CSS class -> property mappings from embedded <style> blocks
  const styleMap: Record<string, Record<string, string>> = {};
  const styleTagMatches = svg.match(/<style[^>]*>([\s\S]*?)<\/style>/g) || [];
  styleTagMatches.forEach((styleTag) => {
    const content = styleTag.replace(/<style[^>]*>/, "").replace(/<\/style>/, "");
    const rules = content.match(/\.([a-zA-Z0-9_-]+)\s*\{([^}]+)\}/g) || [];
    rules.forEach((rule) => {
      const classMatch = rule.match(/\.([a-zA-Z0-9_-]+)\s*\{([^}]+)\}/);
      if (classMatch) {
        const className = classMatch[1];
        styleMap[className] = {};
        classMatch[2].split(";").forEach((prop) => {
          const colonIdx = prop.indexOf(":");
          if (colonIdx === -1) return;
          const k = prop.slice(0, colonIdx).trim();
          const v = prop.slice(colonIdx + 1).trim();
          if (k && v) styleMap[className][k] = v;
        });
      }
    });
  });

  let result = svg
    .replace(/<\?xml[\s\S]*?\?>/g, "")
    .replace(/<!DOCTYPE[\s\S]*?>/g, "")
    .replace(/<!--[\s\S]*?-->/g, "")
    .replace(/<style[\s\S]*?<\/style>/g, "")
    // Strip script tags entirely (all forms: paired, self-closing, or bare open tags)
    // This also avoids JSX typing litecoin.tsx's <script xmlns=...> as HTMLScriptElement
    .replace(/<script[\s\S]*?<\/script\s*>/gi, "")
    .replace(/<script[^>]*\/\s*>/gi, "")
    .replace(/<script[^>]*>/gi, "")
    .replace(/<metadata[\s\S]*?<\/metadata>/g, "")
    .replace(/<desc[\s\S]*?<\/desc>/g, "")
    .replace(/<description[\s\S]*?<\/description>/g, "")
    .replace(/<title[\s\S]*?<\/title>/g, "")
    .replace(/<sodipodi:namedview[\s\S]*?<\/sodipodi:namedview>/g, "")
    .replace(/<rdf:RDF[\s\S]*?<\/rdf:RDF>/g, "")
    .replace(/<sodipodi:[^/]*/g, "")
    .replace(/<inkscape:[^/]*/g, "")
    .replace(/\s*sodipodi:[a-zA-Z-]+=["'][^"']*["']/g, "")
    .replace(/\s*inkscape:[a-zA-Z-]+=["'][^"']*["']/g, "")
    .replace(/\s*sketch:[a-zA-Z-]+=["'][^"']*["']/g, "")
    .replace(/\s*osb:[a-zA-Z-]+=["'][^"']*["']/g, "")
    .replace(/\s*xmlns:[a-zA-Z]+="[^"]*"/g, "");

  // Strip the opening <svg ...> tag
  const svgOpenMatch = result.match(/<svg[\s\S]*?>/);
  if (svgOpenMatch) {
    result = result.slice(result.indexOf(svgOpenMatch[0]) + svgOpenMatch[0].length);
  }

  // Strip the closing </svg>
  const lastClose = result.lastIndexOf("</svg>");
  if (lastClose !== -1) result = result.slice(0, lastClose);

  // Inline CSS classes -> individual element attributes
  if (Object.keys(styleMap).length > 0) {
    result = result.replace(/class="([^"]+)"/g, (_, classNames) => {
      const attrs: Record<string, string> = {};
      classNames.split(/\s+/).forEach((cls: string) => {
        if (styleMap[cls]) Object.assign(attrs, styleMap[cls]);
      });
      const entries = Object.entries(attrs);
      return entries.length
        ? entries.map(([k, v]) => `${k}="${v}"`).join(" ")
        : `className="${classNames}"`;
    });
  }

  // Convert style="..." -> style={{...}}
  result = convertStyleAttributes(result);

  return result.trim();
}

function convertSvgAttributes(svg: string): string {
  let result = svg
    .replace(/stroke-width=/g, "strokeWidth=")
    .replace(/stroke-linecap=/g, "strokeLinecap=")
    .replace(/stroke-linejoin=/g, "strokeLinejoin=")
    .replace(/fill-rule=/g, "fillRule=")
    .replace(/clip-rule=/g, "clipRule=")
    .replace(/clip-path=/g, "clipPath=")
    .replace(/font-family=/g, "fontFamily=")
    .replace(/font-weight=/g, "fontWeight=")
    .replace(/font-size=/g, "fontSize=")
    .replace(/text-anchor=/g, "textAnchor=")
    .replace(/dominant-baseline=/g, "dominantBaseline=")
    .replace(/stop-color=/g, "stopColor=")
    .replace(/stop-opacity=/g, "stopOpacity=")
    .replace(/fill-opacity=/g, "fillOpacity=")
    .replace(/stroke-opacity=/g, "strokeOpacity=")
    .replace(/stroke-dasharray=/g, "strokeDasharray=")
    .replace(/stroke-dashoffset=/g, "strokeDashoffset=")
    .replace(/letter-spacing=/g, "letterSpacing=")
    .replace(/word-spacing=/g, "wordSpacing=")
    .replace(/text-decoration=/g, "textDecoration=")
    .replace(/pointer-events=/g, "pointerEvents=")
    .replace(/shape-rendering=/g, "shapeRendering=")
    .replace(/color-interpolation-filters=/g, "colorInterpolationFilters=")
    .replace(/image-rendering=/g, "imageRendering=")
    .replace(/xlink:href=/g, "href=")
    // Convert remaining class= -> className=
    .replace(/(?<![a-zA-Z])class=/g, "className=")
    // Remove namespace junk
    .replace(/\s*xmlns:[a-zA-Z]+="[^"]*"/g, "")
    .replace(/\s*xlink:[a-zA-Z-]+=["'][^"']*["']/g, "")
    .replace(/\s*sodipodi:[a-zA-Z-]+=["'][^"']*["']/g, "")
    .replace(/\s*inkscape:[a-zA-Z-]+=["'][^"']*["']/g, "")
    .replace(/\s*sketch:[a-zA-Z-]+=["'][^"']*["']/g, "")
    .replace(/\s*osb:[a-zA-Z-]+=["'][^"']*["']/g, "")
    .replace(/\s*dc:[a-zA-Z-]+=["'][^"']*["']/g, "")
    .replace(/\s*rdf:[a-zA-Z-]+=["'][^"']*["']/g, "")
    .replace(/\s*cc:[a-zA-Z-]+=["'][^"']*["']/g, "")
    .replace(/\s*serif:[a-zA-Z-]+=["'][^"']*["']/g, "");

  // Deduplicate attributes using the safe state-machine parser
  result = deduplicatePlainAttributes(result);

  return result;
}

// ------------------------
// ID / name helpers
// ------------------------
function parseLogoId(basename: string): { baseId: string; variant: string } {
  if (!basename.includes("_")) {
    return { baseId: basename, variant: "default" };
  }
  const underscoreIndex = basename.indexOf("_");
  return {
    baseId: basename.slice(0, underscoreIndex),
    variant: basename.slice(underscoreIndex + 1),
  };
}

function toComponentName(id: string): string {
  if (!id.includes("_")) {
    return (
      id
        .split("-")
        .map((p: string) => p.charAt(0).toUpperCase() + p.slice(1))
        .join("")
    );
  }
  const underscoreIndex = id.indexOf("_");
  const baseId = id.slice(0, underscoreIndex);
  const variant = id.slice(underscoreIndex + 1);

  const basePart = baseId
    .split("-")
    .map((p: string) => p.charAt(0).toUpperCase() + p.slice(1))
    .join("");

  const variantPart = variant
    .split("_")
    .map((p: string) => p.charAt(0).toUpperCase() + p.slice(1))
    .join("");

  return basePart + variantPart;
}

function loadExistingJSON() {
  if (fs.existsSync(LOGOS_JSON_PATH)) {
    try {
      return JSON.parse(fs.readFileSync(LOGOS_JSON_PATH, "utf-8"));
    } catch {
      return { logos: [] as any[] };
    }
  }
  return { logos: [] as any[] };
}

// ------------------------
// Main
// ------------------------
interface LogoJSON {
  id: string;
  baseId: string;
  variant: string;
  name: string;
  path: string;
  url?: string;
  category: string;
  tags?: string[];
  viewBox?: string;
  svgContent?: string;
}

const existingData = loadExistingJSON();
const existingMap = new Map<string, LogoJSON>(
  existingData.logos.map((l: { category: any; id: any }) => [`${l.category}/${l.id}`, l])
);

const logos: typeof existingData.logos = [];
const categories = fs
  .readdirSync(LOGOS_DIR)
  .filter((d) => fs.statSync(path.join(LOGOS_DIR, d)).isDirectory());

// ------------------------
// Generate logo data
// ------------------------
for (const category of categories) {
  const categoryPath = path.join(LOGOS_DIR, category);
  const files = fs.readdirSync(categoryPath).filter((f) => f.endsWith(".svg"));

  for (const file of files) {
    const basename = path.basename(file, ".svg");
    const rawSvg = fs.readFileSync(path.join(categoryPath, file), "utf-8");

    const rawSvgContent = convertSvgAttributes(extractInnerSVG(rawSvg));
    // Final safety net: strip any script elements that survived processing
    const svgContent = rawSvgContent
      .replace(/<script[\s\S]*?<\/script\s*>/gi, "")
      .replace(/<script[^>]*\/\s*>/gi, "")
      .replace(/<script[^>]*>/gi, "");
    const existing = existingMap.get(`${category}/${basename}`);
    const { baseId, variant } = parseLogoId(basename);

    logos.push({
      id: basename,
      baseId,
      variant,
      name: baseId
        .split("-")
        .map((p: string) => p.charAt(0).toUpperCase() + p.slice(1))
        .join(" "),
      path: `./generated/${category}/${basename}.tsx`,
      category,
      url: existing?.url || "",
      tags: existing?.tags || [],
      viewBox: extractViewBox(rawSvg),
      svgContent,
    });
  }
}

// ------------------------
// Write logos.json
// ------------------------
fs.writeFileSync(
  LOGOS_JSON_PATH,
  JSON.stringify(
    {
      version: "1.0.0",
      lastUpdated: new Date().toISOString(),
      logos: logos.map((l: LogoJSON) => ({
        id: l.id,
        baseId: l.baseId,
        variant: l.variant,
        name: l.name,
        path: l.path,
        category: l.category,
        url: l.url,
        tags: l.tags,
        viewBox: l.viewBox,
      })),
    },
    null,
    2
  )
);

console.log(`[v0] logos.json updated with ${logos.length} logos`);

// ------------------------
// Generate TSX per category
// ------------------------
for (const category of categories) {
  const categoryDir = path.join(GENERATED_DIR, category);
  if (!fs.existsSync(categoryDir)) fs.mkdirSync(categoryDir, { recursive: true });

  const categoryLogos = logos.filter((l: LogoJSON) => l.category === category);

  for (const logo of categoryLogos) {
    const componentName = toComponentName(logo.id);

    const componentCode = `/**
 * Auto-generated logo component: ${logo.name} (${logo.variant})
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ${componentName}Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const ${componentName} = React.forwardRef<SVGSVGElement, ${componentName}Props>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="${logo.viewBox}"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      ${logo.svgContent}
    </svg>
  )
);

${componentName}.displayName = "${componentName}";

export const ${componentName}Metadata = {
  id: "${logo.id}",
  baseId: "${logo.baseId}",
  variant: "${logo.variant}",
  name: "${logo.name}",
  category: "${logo.category}",
  tags: ${JSON.stringify(logo.tags)},
  viewBox: "${logo.viewBox}",
} as const;

export default ${componentName};
`;

    fs.writeFileSync(path.join(categoryDir, `${logo.id}.tsx`), componentCode);
    console.log(`[v0] Generated TSX: ${category}/${logo.id}.tsx`);
  }

  // Generate category index.tsx
  const indexCode = categoryLogos
    .map((l: LogoJSON) => {
      const componentName = toComponentName(l.id);
      return `export { ${componentName}, ${componentName}Metadata, type ${componentName}Props } from './${l.id}';`;
    })
    .join("\n");

  fs.writeFileSync(path.join(categoryDir, "index.tsx"), indexCode);
  console.log(`[v0] Generated category index: ${category}/index.tsx`);
}

// ------------------------
// Generate main index.tsx
// ------------------------
const mainIndexPath = path.join(GENERATED_DIR, "index.tsx");
let mainImports = "";
let allLogosObject = "export const allLogos = {\n";

for (const category of categories) {
  const categoryLogos = logos.filter((l: LogoJSON) => l.category === category);

  categoryLogos.forEach((l: LogoJSON) => {
    const componentName = toComponentName(l.id);
    mainImports += `import { ${componentName}, ${componentName}Metadata } from './${category}/${l.id}';\n`;
  });

  allLogosObject += `  ${category}: {\n`;
  categoryLogos.forEach((l: LogoJSON) => {
    const componentName = toComponentName(l.id);
    allLogosObject += `    ${componentName}: { Component: ${componentName}, metadata: ${componentName}Metadata },\n`;
  });
  allLogosObject += "  },\n";
}

allLogosObject += "} as const;\n";

fs.writeFileSync(
  mainIndexPath,
  `/**
 * Auto-generated main index for all logos
 * Do not edit manually
 */

${mainImports}

${allLogosObject}
`
);

console.log("[v0] Generated main index.tsx with all logos + metadata");