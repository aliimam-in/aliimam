import fs from "fs"
import path from "path"
import { fileURLToPath } from "url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const dataDir = path.join(__dirname, "../src/data")
const iconsDir = path.join(__dirname, "../src/logos")

function toPascalCase(str) {
  return str
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join("")
}

function writeIconFile(dir, componentName, content) {
  fs.mkdirSync(dir, { recursive: true })
  fs.writeFileSync(path.join(dir, `${componentName}.tsx`), content)
}
 
const datasets = [
  { file: "icon.json", folder: "icon", fill: "currentColor", stroke: "none" },
  { file: "wordmark.json", folder: "wordmark", fill: "currentColor", stroke: "none" }, 
]

const rootExports = []

datasets.forEach(({ file, folder, fill, stroke }) => {
  const dataPath = path.join(dataDir, file)
  if (!fs.existsSync(dataPath)) return

  const data = JSON.parse(fs.readFileSync(dataPath, "utf-8"))
  const icons = data.icons || data
  const folderDir = path.join(iconsDir, folder)
  const exportsArr = []

  Object.entries(icons).forEach(([name, icon]) => {
    const componentName = toPascalCase(name)
    const category = icon.category || "uncategorized"
    const body = icon.body || ""

    if (!body) return

    const content = `
import * as React from "react"

export interface ${componentName}Props extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const ${componentName} = React.forwardRef<SVGSVGElement, ${componentName}Props>(
  ({ size = 24, ...props }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="${fill}" 
      dangerouslySetInnerHTML={{ __html: \`${body}\` }}
      {...props}
    />
  )
)

${componentName}.displayName = "${componentName}"
`

    const categoryDir = path.join(folderDir, category)
    writeIconFile(categoryDir, componentName, content)

    exportsArr.push(`export { ${componentName} } from "./${category}/${componentName}"`)

    // Root export
    rootExports.push(`
import { ${componentName} as ${toPascalCase(folder)}${componentName} } from "./${folder}/${category}/${componentName}"
export const ${componentName} = React.forwardRef(
  ({ variant = "${folder}", ...props }, ref) => {
    if (variant === "${folder}") return <${toPascalCase(folder)}${componentName} ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)
`)
  })

  // Write index.ts inside dataset folder
  fs.writeFileSync(path.join(folderDir, "index.ts"), exportsArr.join("\n"))
})

// Write root index.ts
fs.writeFileSync(
  path.join(iconsDir, "index.ts"),
  `
import * as React from "react"
${rootExports.join("\n")}
`
)

console.log("🎉 All datasets generated category-wise!")