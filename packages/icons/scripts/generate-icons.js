import fs from "fs"
import path from "path"
import { fileURLToPath } from "url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const dataDir = path.join(__dirname, "../src/data")
const iconsDir = path.join(__dirname, "../src/icons")

function toPascalCase(str: string) {
  return str
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join("")
}

function writeIconFile(dir: string, componentName: string, content: string) {
  fs.mkdirSync(dir, { recursive: true })
  fs.writeFileSync(path.join(dir, `${componentName}.tsx`), content)
}

const datasets = [
  { file: "stroke.json", folder: "stroke", fill: "none", stroke: "currentColor" },
  { file: "solid.json", folder: "solid", fill: "currentColor", stroke: "none" },
  { file: "pixel.json", folder: "pixel", fill: "none", stroke: "currentColor" },
  { file: "glass.json", folder: "glass", fill: "currentColor", stroke: "none" },
]

// Track all icons for root index
const allIcons: Record<
  string,
  { category: string; variants: { [key: string]: string } }
> = {}

datasets.forEach(({ file, folder, fill, stroke }) => {
  const dataPath = path.join(dataDir, file)
  if (!fs.existsSync(dataPath)) return

  const data = JSON.parse(fs.readFileSync(dataPath, "utf-8"))
  const icons = data.icons || data
  const folderDir = path.join(iconsDir, folder)
  const exportsArr: string[] = []

  Object.entries(icons).forEach(([name, icon]) => {
    const componentName = toPascalCase(name)
    const category = icon.category || "uncategorized"
    const body = icon.body || ""

    if (!body) return

    // Save info for root wrapper
    if (!allIcons[componentName]) allIcons[componentName] = { category, variants: {} }
    allIcons[componentName].variants[folder] = `./${folder}/${category}/${componentName}`

    // Create individual icon component
    const content = `
import * as React from "react"

export interface ${componentName}Props extends React.SVGProps<SVGSVGElement> {
  size?: number
  color?: string
  strokeWidth?: number
}

export const ${componentName} = React.forwardRef<SVGSVGElement, ${componentName}Props>(
  ({ size = 24, color = "currentColor", strokeWidth = 2, ...props }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="${fill}"
      stroke="${stroke}"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      dangerouslySetInnerHTML={{ __html: \`${body}\` }}
      {...props}
    />
  )
)

${componentName}.displayName = "${componentName}"
`

    const categoryDir = path.join(folderDir, category)
    writeIconFile(categoryDir, componentName, content)

    // Add to dataset index.tsx
    exportsArr.push(`export { ${componentName} } from "./${category}/${componentName}"`)
  })

  fs.writeFileSync(path.join(folderDir, "index.tsx"), exportsArr.join("\n"))
})

// Generate root index.tsx
const rootExports: string[] = [`import * as React from "react"`]

Object.entries(allIcons).forEach(([componentName, { variants }]) => {
  // Import all variants with unique names
  const importLines = Object.entries(variants)
    .map(([variant, path]) => `import { ${componentName} as ${variant}${componentName} } from "${path}"`)
    .join("\n")

  const rootComponent = `
${importLines}

export type IconVariant = "stroke" | "solid" | "pixel" | "glass"

export const ${componentName} = React.forwardRef<
  SVGSVGElement,
  React.SVGProps<SVGSVGElement> & { variant?: IconVariant; size?: number; color?: string; strokeWidth?: number }
>(({ variant = "stroke", size, color, strokeWidth, ...rest }, ref) => {
  switch (variant) {
    case "stroke": return <stroke${componentName} ref={ref} size={size} color={color} strokeWidth={strokeWidth} {...rest} />
    case "solid": return <solid${componentName} ref={ref} size={size} color={color} {...rest} />
    case "pixel": return <pixel${componentName} ref={ref} size={size} color={color} strokeWidth={strokeWidth} {...rest} />
    case "glass": return <glass${componentName} ref={ref} size={size} color={color} {...rest} />
    default: return null
  }
})

${componentName}.displayName = "${componentName}"
`

  rootExports.push(rootComponent)
})

fs.writeFileSync(path.join(iconsDir, "index.tsx"), rootExports.join("\n"))

console.log("🎉 Icons generated successfully with variants and root wrapper!")