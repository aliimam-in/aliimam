import * as fs from "fs"
import * as path from "path"

const PROJECT_ROOT = path.resolve(__dirname, "..")
const LOGOS_DIR = path.join(PROJECT_ROOT, "src", "logos")
const GENERATED_DIR = path.join(PROJECT_ROOT, "src", "generated")
const LOGOS_JSON_PATH = path.join(GENERATED_DIR, "logos.json")

// ------------------------
// 🗑️ Delete old generated folder completely before regenerating
// ------------------------
if (fs.existsSync(GENERATED_DIR)) {
  fs.rmSync(GENERATED_DIR, { recursive: true, force: true })
  console.log("[AI] Deleted old generated/ folder")
}
fs.mkdirSync(GENERATED_DIR, { recursive: true })

// ------------------------
// Helpers
// ------------------------
function extractViewBox(svg: string) {
  const match = svg.match(/viewBox="([^"]+)"/)
  return match ? match[1] : "0 0 24 24"
}

function convertStyleString(svg: string): string {
  return svg.replace(/style="([^"]*)"/g, (_, styleStr) => {
    const entries: string[] = []

    styleStr.split(";").forEach((prop: string) => {
      if (!prop.trim()) return

      const colonIdx = prop.indexOf(":")
      if (colonIdx === -1) return

      const key = prop.slice(0, colonIdx).trim()
      const val = prop.slice(colonIdx + 1).trim()

      if (!key || !val) return
      if (val.includes("&quot") || val.includes("'") || val.includes('"'))
        return
      if (key.startsWith("-inkscape") || key.startsWith("inkscape")) return

      const camelKey = key.replace(/-([a-z])/g, (_: string, c: string) =>
        c.toUpperCase()
      )
      const cleanVal = val.replace(/'/g, "\\'")
      entries.push(`${camelKey}:'${cleanVal}'`)
    })

    if (entries.length === 0) return ""
    return `style={{${entries.join(",")}}}`
  })
}

function extractInnerSVG(svg: string): string {
  const styleMap: Record<string, Record<string, string>> = {}
  const styleTagMatches = svg.match(/<style[^>]*>([\s\S]*?)<\/style>/g) || []
  styleTagMatches.forEach((styleTag) => {
    const content = styleTag
      .replace(/<style[^>]*>/, "")
      .replace(/<\/style>/, "")
    const rules = content.match(/\.([a-zA-Z0-9_-]+)\s*\{([^}]+)\}/g) || []
    rules.forEach((rule) => {
      const classMatch = rule.match(/\.([a-zA-Z0-9_-]+)\s*\{([^}]+)\}/)
      if (classMatch) {
        const className = classMatch[1]
        styleMap[className] = {}
        classMatch[2].split(";").forEach((prop) => {
          const [k, v] = prop.split(":").map((s) => s.trim())
          if (k && v) styleMap[className][k] = v
        })
      }
    })
  })

  let result = svg
    .replace(/<\?xml[\s\S]*?\?>/g, "")
    .replace(/<!DOCTYPE[\s\S]*?>/g, "")
    .replace(/<!--[\s\S]*?-->/g, "")
    .replace(/<style[\s\S]*?<\/style>/g, "")
    .replace(/class="[^"]*"/g, "")
    .replace(/<metadata[\s\S]*?<\/metadata>/g, "")
    .replace(/<sodipodi:namedview[\s\S]*?<\/sodipodi:namedview>/g, "")
    .replace(/<rdf:RDF[\s\S]*?<\/rdf:RDF>/g, "")
    .replace(/<sodipodi:[^/]*/g, "")
    .replace(/<inkscape:[^/]*/g, "")
    .replace(/\s*sodipodi:[a-zA-Z-]+=["'][^"']*["']/g, "")
    .replace(/\s*inkscape:[a-zA-Z-]+=["'][^"']*["']/g, "")
    .replace(/\s*sketch:[a-zA-Z-]+=["'][^"']*["']/g, "")
    .replace(/\s*osb:[a-zA-Z-]+=["'][^"']*["']/g, "")
    .replace(/\s*xmlns:[a-zA-Z]+="[^"]*"/g, "")

  const svgOpenEnd = result.search(/<svg[\s\S]*?>/)
  if (svgOpenEnd !== -1) {
    const match = result.match(/<svg[\s\S]*?>/)
    if (match) result = result.slice(svgOpenEnd + match[0].length)
  }

  const lastClose = result.lastIndexOf("</svg>")
  if (lastClose !== -1) result = result.slice(0, lastClose)

  if (Object.keys(styleMap).length > 0) {
    result = result.replace(/class="([^"]+)"/g, (_, classNames) => {
      const attrs: Record<string, string> = {}
      classNames.split(/\s+/).forEach((cls: string) => {
        if (styleMap[cls]) Object.assign(attrs, styleMap[cls])
      })
      const entries = Object.entries(attrs)
      return entries.length
        ? entries.map(([k, v]) => `${k}="${v}"`).join(" ")
        : `class="${classNames}"`
    })
  }

  result = convertStyleString(result)
  return result.trim()
}

function convertSvgAttributes(svg: string) {
  return svg
    // 1️⃣ Replace any fill except "none" with currentColor
    .replace(/fill=["'](?!none)[^"']*["']/gi, 'fill="currentColor"')

    // 2️⃣ If element has no fill at all → inject fill="currentColor"
    .replace(
      /<(path|circle|rect|polygon|polyline|ellipse)(?![^>]*fill=)/gi,
      '<$1 fill="currentColor"'
    )

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
    .replace(/stroke-width=/g, "strokeWidth=")
    .replace(/stroke-miterlimit=/g, "strokeMiterlimit=")
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
    .replace(/\s*xmlns:[a-zA-Z]+="[^"]*"/g, "")
    .replace(/\s*xlink:[a-zA-Z-]+=["'][^"']*["']/g, "")
    .replace(/\s*sodipodi:[a-zA-Z-]+=["'][^"']*["']/g, "")
    .replace(/\s*inkscape:[a-zA-Z-]+=["'][^"']*["']/g, "")
    .replace(/\s*sketch:[a-zA-Z-]+=["'][^"']*["']/g, "")
    .replace(/\s*osb:[a-zA-Z-]+=["'][^"']*["']/g, "")
    .replace(/\s*dc:[a-zA-Z-]+=["'][^"']*["']/g, "")
    .replace(/\s*rdf:[a-zA-Z-]+=["'][^"']*["']/g, "")
    .replace(/\s*cc:[a-zA-Z-]+=["'][^"']*["']/g, "")
    .replace(/\s*serif:[a-zA-Z-]+=["'][^"']*["']/g, "")
}

/**
 * Parse logo id and variant from filename basename.
 *
 * Rules:
 *  - "ad"         → { baseId: "ad",  variant: "default" }
 *  - "ad_filled"  → { baseId: "ad",  variant: "filled"  }
 *  - "ad_circle"  → { baseId: "ad",  variant: "circle"  }
 *  - "some-icon_filled" → { baseId: "some-icon", variant: "filled" }
 *
 * The variant suffix is detected only for known variants: filled, circle, outline.
 * Anything else (e.g. "ad_words") is treated as part of the baseId with variant "default".
 */
const KNOWN_VARIANTS = new Set(["shapes", "sketch", "pattern", "texture"])

function parseLogoId(basename: string): { baseId: string; variant: string } {
  const underscoreIndex = basename.lastIndexOf("_")
  if (underscoreIndex === -1) {
    return { baseId: basename, variant: "default" }
  }

  const possibleVariant = basename.slice(underscoreIndex + 1).toLowerCase()
  if (KNOWN_VARIANTS.has(possibleVariant)) {
    return {
      baseId: basename.slice(0, underscoreIndex),
      variant: possibleVariant,
    }
  }

  // Not a known variant suffix — whole name is baseId
  return { baseId: basename, variant: "default" }
}

function toComponentName(id: string): string {
  // Replace underscores and hyphens to build PascalCase
  return id
    .split(/[-_]/)
    .map((p: string) => p.charAt(0).toUpperCase() + p.slice(1))
    .join("")
}

function loadExistingJSON() {
  // Since we deleted the folder, there's no existing JSON — return empty
  return { logos: [] as any[] }
}

// ------------------------
// Types
// ------------------------
interface LogoJSON {
  id: string
  baseId: string
  variant: string
  name: string
  path: string
  category: string
  tags?: string[]
  viewBox?: string
  svgContent?: string
}

const existingData = loadExistingJSON()
const existingMap = new Map<string, LogoJSON>(
  //@ts-ignore
  existingData.logos.map((l: { category: any; id: any }) => [
    `${l.category}/${l.id}`,
    l,
  ])
)

const allVectorsRaw: LogoJSON[] = []
const categories = fs
  .readdirSync(LOGOS_DIR)
  .filter((d) => fs.statSync(path.join(LOGOS_DIR, d)).isDirectory())

// ------------------------
// Collect all logos from all category folders
// ------------------------

for (const category of categories) {
  const categoryPath = path.join(LOGOS_DIR, category)
  const files = fs.readdirSync(categoryPath).filter((f) => f.endsWith(".svg"))

  for (const file of files) {
    const basename = path.basename(file, ".svg")
    const rawSvg = fs.readFileSync(path.join(categoryPath, file), "utf-8")
    const svgContent = convertSvgAttributes(extractInnerSVG(rawSvg))
    const existing = existingMap.get(`${category}/${basename}`)
    const { baseId, variant } = parseLogoId(basename)

    allVectorsRaw.push({
      id: basename,
      baseId,
      variant,
      name: baseId
        .split("-")
        .map((p: string) => p.charAt(0).toUpperCase() + p.slice(1))
        .join(" "),
      path: `./generated/${category}/${basename}.tsx`,
      category,
      tags: existing?.tags || [],
      viewBox: extractViewBox(rawSvg),
      svgContent,
    })
  }
}

// ------------------------
// Deduplicate by id (same filename in multiple folders → first wins)
// ------------------------
const seenIds = new Set<string>()
const logos: LogoJSON[] = []

for (const logo of allVectorsRaw) {
  if (seenIds.has(logo.id)) {
    console.warn(
      `[SKIP] "${logo.id}" already exists (found again in "${logo.category}") — skipping duplicate.`
    )
    continue
  }
  seenIds.add(logo.id)
  logos.push(logo)
}

console.log(
  `[AI] SVGs found: ${allVectorsRaw.length} | After dedup: ${
    logos.length
  } | Skipped: ${allVectorsRaw.length - logos.length}`
)

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
        tags: l.tags,
        viewBox: l.viewBox,
      })),
    },
    null,
    2
  )
)

console.log(`[AI] logos.json updated with ${logos.length} logos`)

// ------------------------
// Generate TSX per category
// ------------------------
for (const category of categories) {
  const categoryDir = path.join(GENERATED_DIR, category)
  if (!fs.existsSync(categoryDir))
    fs.mkdirSync(categoryDir, { recursive: true })

  const categoryLogos = logos.filter((l: LogoJSON) => l.category === category)

  for (const logo of categoryLogos) {
  const componentName = toComponentName(logo.id)

  const componentCode = `
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
      fill="none"
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
`

  fs.writeFileSync(path.join(categoryDir, `${logo.id}.tsx`), componentCode)
  console.log(`[AI] Generated TSX: ${category}/${logo.id}.tsx`)
}

  // Category index
  const indexCode = categoryLogos
    .map((l: LogoJSON) => {
      const componentName = toComponentName(l.id)
      return `export { ${componentName}, ${componentName}Metadata, type ${componentName}Props } from './${l.id}';`
    })
    .join("\n")

  fs.writeFileSync(path.join(categoryDir, "index.tsx"), indexCode)
  console.log(
    `[AI] Generated category index: ${category}/index.tsx (${categoryLogos.length} logos)`
  )
}

// ------------------------
// Generate main index.tsx
// ------------------------
const mainIndexPath = path.join(GENERATED_DIR, "index.tsx")

let namedExports = `/** Auto-generated index */\n\n`
let internalImports = `` // 👈 Ye zaroori hai allVectors object ke liye
let categoryStructure: Record<string, string[]> = {}

logos.forEach((logo) => {
  const compName = toComponentName(logo.id)

  // 1. External users ke liye export
  namedExports += `export { ${compName}, ${compName}Metadata } from './${logo.category}/${logo.id}';\n`

  // 2. Internal allVectors object ke liye import
  internalImports += `import { ${compName}, ${compName}Metadata } from './${logo.category}/${logo.id}';\n`

  if (!categoryStructure[logo.category]) categoryStructure[logo.category] = []
  categoryStructure[logo.category].push(compName)
})

// 3. Build allVectors object
let allVectorsExport = `\nexport const allVectors = {\n`
for (const [cat, comps] of Object.entries(categoryStructure)) {
  allVectorsExport += `  ${cat}: {\n`
  comps.forEach((comp) => {
    allVectorsExport += `    ${comp}: { Component: ${comp}, metadata: ${comp}Metadata },\n`
  })
  allVectorsExport += `  },\n`
}
allVectorsExport += `} as const;\n`

// Final file content: Exports + Imports + Object
fs.writeFileSync(
  mainIndexPath,
  namedExports + "\n" + internalImports + "\n" + allVectorsExport
)

console.log(`[SUCCESS] Generated ${logos.length} logos.`)

console.log("[AI] Generated main index.tsx with all logos + metadata")
