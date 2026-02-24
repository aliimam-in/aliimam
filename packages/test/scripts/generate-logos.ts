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

function extractInnerSVG(svg: string) {
  return svg
    .replace(/<\?xml.*?\?>/, "")
    .replace(/<!DOCTYPE.*?>/, "")
    .replace(/<svg[^>]*>/, "")
    .replace(/<\/svg>/, "")
    .trim();
}

function convertSvgAttributes(svg: string) {
  return svg
    .replace(/stroke-width=/g, "strokeWidth=")
    .replace(/stroke-linecap=/g, "strokeLinecap=")
    .replace(/stroke-linejoin=/g, "strokeLinejoin=")
    .replace(/fill-rule=/g, "fillRule=")
    .replace(/clip-rule=/g, "clipRule=");
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
  name: string;
  path: string;
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
const categories = fs.readdirSync(LOGOS_DIR).filter(d => fs.statSync(path.join(LOGOS_DIR, d)).isDirectory());

// ------------------------
// Generate logo data
// ------------------------
for (const category of categories) {
  const categoryPath = path.join(LOGOS_DIR, category);
  const files = fs.readdirSync(categoryPath).filter(f => f.endsWith(".svg"));

  for (const file of files) {
    const basename = path.basename(file, ".svg");
    const rawSvg = fs.readFileSync(path.join(categoryPath, file), "utf-8");

    const svgContent = convertSvgAttributes(extractInnerSVG(rawSvg));
    const existing = existingMap.get(`${category}/${basename}`);

    logos.push({
      id: basename,
      name: basename
        .split("-")
        .map(p => p.charAt(0).toUpperCase() + p.slice(1))
        .join(" "),
      path: `./generated/${category}/${basename}.tsx`,
      category,
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
      logos: logos.map((l: { id: any; name: any; path: any; category: any; tags: any; viewBox: any; }) => ({
        id: l.id,
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
);

console.log(`[v0] logos.json updated with ${logos.length} logos`);

// ------------------------
// Generate TSX per category
// ------------------------
for (const category of categories) {
  const categoryDir = path.join(GENERATED_DIR, category);
  if (!fs.existsSync(categoryDir)) fs.mkdirSync(categoryDir, { recursive: true });

  const categoryLogos = logos.filter((l: { category: string; }) => l.category === category);

  for (const logo of categoryLogos) {
    const componentName =
      logo.id
        .split("-")
        .map((p: string) => p.charAt(0).toUpperCase() + p.slice(1))
        .join("") + "Logo";

    const componentCode = `/**
 * Auto-generated logo component: ${logo.name}
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

  // ------------------------
  // Generate category index.tsx
  // ------------------------
  const indexCode = categoryLogos
    .map((l: { id: string; }) => {
      const componentName =
        l.id
          .split("-")
          .map((p: string) => p.charAt(0).toUpperCase() + p.slice(1))
          .join("") + "Logo";
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
  const categoryLogos = logos.filter((l: { category: string; }) => l.category === category);

  // Import each component + metadata
  categoryLogos.forEach((l: { id: string; }) => {
    const componentName =
      l.id
        .split("-")
        .map((p: string) => p.charAt(0).toUpperCase() + p.slice(1))
        .join("") + "Logo";
    mainImports += `import { ${componentName}, ${componentName}Metadata } from './${category}/${l.id}';\n`;
  });

  // Build allLogos object
  allLogosObject += `  ${category}: {\n`;
  categoryLogos.forEach((l: { id: string; }) => {
    const componentName =
      l.id
        .split("-")
        .map((p: string) => p.charAt(0).toUpperCase() + p.slice(1))
        .join("") + "Logo";
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