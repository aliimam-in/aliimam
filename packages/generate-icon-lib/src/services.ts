import * as prettier from "prettier"
import isOnline from "is-online"
import { temporaryDirectory } from "tempy"
import * as fse from "fs-extra/esm"
import * as fs from "fs"
import * as cheerio from "cheerio"
import * as path from "path"
import * as _ from "lodash-es"
import * as ejs from "ejs"
import { execa } from "execa"
import { FILE_PATH_MANIFEST, FILE_PATH_ENTRY, FILE_PATH_TYPES, FOLDER_PATH_ICONS } from "./consts.js"
import type {
  IFigmaConfig,
  IIcons,
  IIconsSvgUrls,
  IIconManifest,
  IIcon,
  IDiffSummary,
  ITemplateIcon,
  IFigmaCanvas,
  IFigmaDocument,
  IFigmaFileImageResponse,
  IFigmaFileResponse,
} from "./types.js"
import { CodedError, ERRORS } from "./types.js"
import * as svgo from "svgo"
import { fetch, pushObjLeafNodesToArr, handleError } from "./utils.js"
import chalk from "chalk" 
import { IconMetadata } from "./templates/types.js"

const transformers = {
  /**
   * Pass SVG through SVGO to reduce size.
   */
  async passSVGO(svgRaw: string) {
    const { data } = svgo.optimize(svgRaw, {
      plugins: [
        "removeDoctype",
        "removeXMLProcInst",
        "removeComments",
        "removeMetadata",
        // "removeXMLNS",
        "removeEditorsNSData",
        "cleanupAttrs",
        "minifyStyles",
        "convertStyleToAttrs",
        "cleanupIds",
        "removeRasterImages",
        "removeUselessDefs",
        "cleanupNumericValues",
        // "cleanupListOfValues",
        "convertColors",
        "removeUnknownsAndDefaults",
        "removeNonInheritableGroupAttrs",
        "removeUselessStrokeAndFill",
        // "removeViewBox",
        "cleanupEnableBackground",
        "removeHiddenElems",
        "removeEmptyText",
        "convertShapeToPath",
        "moveElemsAttrsToGroup",
        "moveGroupAttrsToElems",
        "collapseGroups",
        // "convertPathData",
        "convertTransform",
        "removeEmptyAttrs",
        "removeEmptyContainers",
        "mergePaths",
        "removeUnusedNS",
        // "sortAttrs",
        "removeTitle",
        "removeDesc",
        // "removeDimensions",
        // "removeStyleElement",
        // "removeScripts",
      ],
    })
    return data
  },

  /**
   * Swaps out all colors (except for "non") for stroke and fill to "currentColor".
   */
  injectCurrentColor(svgRaw: string) {
    const $ = cheerio.load(svgRaw, { xmlMode: true })
    $("*").each((i, el) => {
      if (isTagElement(el)) {
        Object.keys(el.attribs).forEach((attrKey) => {
          if (["fill", "stroke"].includes(attrKey)) {
            const val = $(el).attr(attrKey)
            if (val !== "none") {
              $(el).attr(attrKey, "currentColor")
            }
          }
        })
      }
    })

    return $.xml()
  },

  async prettify(svgRaw: string) {
    const prettierOptions = await prettier.resolveConfig(process.cwd())
    return await prettier.format(svgRaw, {
      ...prettierOptions,
      parser: "html",
    })
  },

  readyForJSX(svgRaw: string) {
  const $ = cheerio.load(svgRaw, { xmlMode: true })
  $("*").each((_i, el) => {
    if (isTagElement(el)) {
      Object.keys(el.attribs).forEach((attrKey) => {
        if (attrKey.includes("-")) {
          $(el).attr(_.camelCase(attrKey), el.attribs[attrKey]).removeAttr(attrKey)
        }
        if (attrKey === "class") {
          $(el).attr("className", el.attribs[attrKey]).removeAttr(attrKey)
        }
      })
    }
  })

  return $("svg")
    .attr("props", "...")
    .attr("ref", "forwardedRef")
    .toString()
    .replace(/strokeWidth=['"][\d.]+['"]/g, "strokeWidth={strokeWidth}")
    .replace(/stroke=['|"]currentColor['|"]/g, "stroke={color}")
    .replace(/fill=['|"]currentColor['|"]/g, "fill={color}") 
    .replace('props="..."', "className={className}\n      strokeWidth={strokeWidth}\n      strokeLinecap={strokeLinecap}\n      strokeLinejoin={strokeLinejoin}\n      strokeDasharray={strokeDasharray}\n      opacity={opacity}\n      {...props}")
    .replace('ref="forwardedRef"', "ref={forwardedRef}")
},
}
 
const labelling = {
  typeFromFrameNodeName(nodeName: string): string {
    const base = path.dirname(nodeName)
    const trimmed = base.trim()
    const camelCased = _.camelCase(trimmed)
    return camelCased
  },
  sizeFromFrameNodeName(nodeName: string): string {
    // Extract size from frame name, default to "16" if no size specified
    const basename = path.basename(nodeName).toLowerCase().trim()
    // If the frame name contains a size (like "16", "24", "32"), use it
    const sizeMatch = basename.match(/(\d+)/)
    const size = sizeMatch ? sizeMatch[1] : "16" // default to 16
    return labelling.addSizePrefix(size)
  },
  filePathFromIcon(icon: IIcon): string {
    // Create path: icons/logos/ai/cursor.svg or icons/icons/arrows/arrow-down.svg
    return path.join("icons", icon.type, `${icon.svgName}.svg`)
  },
  componentFilePathFromIcon(icon: IIcon): string {
    // Create path: src/logos/ai/Cursor.tsx or src/icons/arrows/ArrowDown.tsx
    return path.join("src", icon.type, `${icon.jsxName}.tsx`)
  },
  stripSizePrefix(size: string) {
    return size.replace(/^:?(.*)/, "$1")
  },
  addSizePrefix(size: string) {
    return `:${size.replace(/^(:?)(.*)/, "$2")}`
  },
}

const currentTempDir = temporaryDirectory()

const currentListOfAddedFiles: string[] = []

export async function prechecks() {
  /* We can't work offline. */
  isOnline().then((isOn) => {
    if (!isOn) {
      throw new CodedError(ERRORS.NETWORK_OFFLINE, "An internet connection is required to find and render Icons.", true)
    }
  })

  /* We don't want to end up deleted work-in-progress. */
  const [{ stdout: trackedFiles }, { stdout: untrackedFiles }] = await Promise.all([
    // Checks for uncommitted changes.
    execa("git", ["diff-index", "HEAD", "--", FOLDER_PATH_ICONS]),
    // Checks for untracked files.
    execa("git", ["ls-files", "--others", "--exclude-standard", FOLDER_PATH_ICONS]),
  ])
  if (trackedFiles.length > 0 || untrackedFiles.length > 0) {
    handleError(
      new CodedError(
        ERRORS.DIRTY_WORKING_DIR,
        "There are uncommitted or untracked files in the working directory.\nPlease commit, stash, or remove them. Then try again.",
        true,
      ),
      false,
    )
    console.error(`
${chalk.bold("Git Status")} ${chalk.dim(
      `(${["--no-renames", "--untracked-files", "--short", "--", FOLDER_PATH_ICONS].join(" ")})`,
    )}
`)
    await execa("git", ["status", "--no-renames", "--untracked-files", "--short", "--", FOLDER_PATH_ICONS], {
      stdio: "inherit",
    })
    process.exit(1)
  }
}

export function createFigmaConfig(fileKey: string): IFigmaConfig {
  const token = process.env.FIGMA_ACCESS_TOKEN
  if (!token) {
    throw new CodedError(
      ERRORS.FIGMA_API,
      "An invalid token was used. Follow the Auth Guide (https://git.io/Je87i), and try again.",
    )
  }
  return {
    baseUrl: "https://api.figma.com",
    fileKey,
    headers: new Headers({
      "X-Figma-Token": token,
    }),
  }
}

export async function getFigmaDocument(config: IFigmaConfig): Promise<IFigmaDocument> {
  const resp = await fetch(`${config.baseUrl}/v1/files/${config.fileKey}`, {
    headers: config.headers,
  })
  const data = (await resp.json()) as IFigmaFileResponse
  if (data.status === 403 && data.err === "Invalid token") {
    throw new CodedError(
      ERRORS.FIGMA_API,
      "An invalid token was used. Follow the Auth Guide (https://git.io/Je87i), and try again.",
    )
  }
  return data.document
}

export async function renderIdsToSvgs(ids: string[], config: IFigmaConfig): Promise<IIconsSvgUrls> {
  const resp = await fetch(`${config.baseUrl}/v1/images/${config.fileKey}?ids=${ids}&format=svg`, {
    headers: config.headers,
  })

  // We can't be sure the response, when an error, will have a body that can be streamed to JSON.
  let data: IFigmaFileImageResponse = {
    err: undefined,
    images: {},
  }
  if (resp.headers.get("content-type")?.includes("application/json")) {
    data = (await resp.json()) as IFigmaFileImageResponse
  }
  const error = typeof data.err === "object" ? JSON.stringify(data.err, null, 2) : data.err

  if (!resp.ok) {
    switch (resp.status) {
      case 400:
        throw new CodedError(ERRORS.FIGMA_API, `Unexpected error encountered from Figma API\n${error}`)
      case 404:
        throw new CodedError(
          ERRORS.FIGMA_API,
          "One or more of the icons couldn't be found in Figma. Check to see if they still exist, and try again.",
        )
      case 500:
        throw new CodedError(ERRORS.FIGMA_API, "Figma could not render the icons. ಠ_ಠ")
      default:
        throw new CodedError(
          ERRORS.UNEXPECTED,
          `An error occured while rendering icons to SVG.\n${resp.status}\n${error}`,
        )
    }
  }

  if (!data.images || !Object.keys(data.images).length) {
    throw new CodedError(
      ERRORS.UNEXPECTED,
      `An error occured after rendering icons in Figma. Render response:\n${JSON.stringify(data, null, 2)}`,
    )
  }

  return data.images
}

export function getIconsPage(document: IFigmaDocument): IFigmaCanvas | null {
  const canvas = document.children.find((page) => page.name.toLowerCase() === "icons")

  return canvas && canvas.type === "CANVAS" ? canvas : null
}

export function getIcons(iconsCanvas: IFigmaCanvas): IIcons {
  return iconsCanvas.children.reduce((icons: IIcons, iconSetNode) => {
    if (iconSetNode.type === "FRAME" || iconSetNode.type === "GROUP") {
      const topLevelCategory = _.camelCase(iconSetNode.name.toLowerCase()); // e.g., "solid", "stroke"

      iconSetNode.children.forEach((iconGroupNode) => {
        if (iconGroupNode.type === "COMPONENT") {
          const svgName = _.kebabCase(iconGroupNode.name.toLowerCase());
          const jsxName = _.upperFirst(
            _.camelCase(iconGroupNode.name.replace(/([0-9a-z])([0-9A-Z])/g, "$1 $2")),
          );

          icons[iconGroupNode.id] = {
            jsxName,
            svgName,
            id: iconGroupNode.id,
            size: labelling.sizeFromFrameNodeName(iconSetNode.name),
            type: topLevelCategory, // ✅ "solid" | "stroke"
            topLevelCategory, // Store for file path distinction
          };
        } else if (iconGroupNode.type === "FRAME" || iconGroupNode.type === "GROUP") {
          const subCategory = _.camelCase(iconGroupNode.name.toLowerCase()); // e.g., "ali", "logos"
          const combinedCategory = subCategory; // Use subCategory as the primary type

          iconGroupNode.children.forEach((iconNode) => {
            if (iconNode.type === "COMPONENT") {
              const svgName = _.kebabCase(iconNode.name.toLowerCase());
              const jsxName = _.upperFirst(
                _.camelCase(iconNode.name.replace(/([0-9a-z])([0-9A-Z])/g, "$1 $2")),
              );

              icons[iconNode.id] = {
                jsxName,
                svgName,
                id: iconNode.id,
                size: labelling.sizeFromFrameNodeName(iconGroupNode.name),
                type: topLevelCategory, // ✅ "solid" | "stroke"
                subCategory, // Store subCategory for category
                topLevelCategory, // Store for file path distinction
              };
            } else if (iconNode.type === "FRAME" || iconNode.type === "GROUP") {
              iconNode.children.forEach((deepIconNode) => {
                if (deepIconNode.type === "COMPONENT") {
                  const svgName = _.kebabCase(deepIconNode.name.toLowerCase());
                  const jsxName = _.upperFirst(
                    _.camelCase(deepIconNode.name.replace(/([0-9a-z])([0-9A-Z])/g, "$1 $2")),
                  );

                  icons[deepIconNode.id] = {
                    jsxName,
                    svgName,
                    id: deepIconNode.id,
                    size: labelling.sizeFromFrameNodeName(iconNode.name),
                    type: topLevelCategory, // ✅ "solid" | "stroke"
                    subCategory, // Store subCategory for category
                    topLevelCategory, // Store for file path distinction
                  };
                }
              });
            }
          });
        }
      });
    }
    return icons;
  }, {});
}

export async function downloadSvgsToFs(urls: IIconsSvgUrls, icons: IIcons, onProgress: () => void) {
  await Promise.all(
    Object.keys(urls).map(async (iconId) => {
      const processedSvg = await (await fetch(urls[iconId]))
        .text()
        .then((svgRaw) => transformers.passSVGO(svgRaw))
        .then((svgRaw) => transformers.injectCurrentColor(svgRaw))

      const filePath = path.resolve(currentTempDir, labelling.filePathFromIcon(icons[iconId]))
      await fse.outputFile(filePath, processedSvg, { encoding: "utf8" })
      currentListOfAddedFiles.push(filePath)
      onProgress()
    }),
  )
}

export function iconsToComponentManifest(icons: IIcons): any {
  const components: any = {}
  const categories: any = {}
  
  Object.keys(icons).forEach((iconId) => {
    const icon = icons[iconId]
    const category = icon.type.split('/')[0] || 'icons'
    const subcategory = icon.type.split('/')[1]
    
    // Add to components list
    components[icon.jsxName] = {
      name: icon.jsxName,
      path: `src/${icon.type}/${icon.jsxName}.tsx`,
      category,
      subcategory: subcategory || null,
      size: labelling.stripSizePrefix(icon.size)
    }
    
    // Group by category
    if (!categories[category]) {
      categories[category] = {}
    }
    if (subcategory) {
      if (!categories[category][subcategory]) {
        categories[category][subcategory] = []
      }
      categories[category][subcategory].push(icon.jsxName)
    } else {
      if (!categories[category].icons) {
        categories[category].icons = []
      }
      categories[category].icons.push(icon.jsxName)
    }
  })
  
  return {
    components,
    categories,
    total: Object.keys(components).length
  }
}

export function iconsToSvgPaths(icons: IIcons) {
  return Object.keys(icons).map((iconId) => labelling.filePathFromIcon(icons[iconId]))
}

export function filePathToSVGinJSXSync(filePath: string) {
  const absFilePath = path.resolve(currentTempDir, filePath)
  const svgRaw = fs.readFileSync(absFilePath, { encoding: "utf8" })
  return transformers.readyForJSX(svgRaw)
}

const metadata = {
  generateIconMetadata(icon: IIcon): IconMetadata {
    // Extract category from type (e.g., "solid/ali" -> "ali")
    const category = icon.type.includes("/ali") ? "ali" : icon.type.split("/")[0] || "icons";

    // Generate tags based on icon name and category
    const nameTags = icon.svgName
      .split("-")
      .filter((tag) => tag.length > 1); // Remove single character parts

    // Category-specific tags
    const categoryTags: Record<string, string[]> = {
      ali: ["alibaba", "brand", "ecommerce"],
      logos: ["brand", "company", "logo"],
      icons: ["interface", "ui", "icon"],
      arrows: ["direction", "navigation", "pointer"],
      social: ["social media", "platform", "network"],
      files: ["document", "file", "format"],
      devices: ["hardware", "device", "tech"],
    };

    const baseTags = categoryTags[category] || ["icon"];
    const allTags = [...new Set([...nameTags, ...baseTags])];

    // Determine variants based on icon type
    const variants: ("stroke" | "solid" | "duotone" | "twotone" | "bulk")[] = 
      icon.type.includes("solid/ali") ? ["solid"] : 
      icon.type.includes("stroke/ali") ? ["stroke"] : 
      ["stroke", "solid"]; // Default for other categories

    return {
      name: icon.jsxName,
      category,
      tags: allTags,
      description: `${icon.jsxName} icon from ${category} category`,
      variants,
    };
  },
};

// Modify the generateReactComponents function to include metadata
export async function generateReactComponents(icons: IIcons) {
  const getTemplateSource = (templateFile: string) =>
    fs.promises.readFile(path.resolve(import.meta.dirname, "./templates/", templateFile), { encoding: "utf8" })
  
  const templates = {
    entry: await getTemplateSource("entry.tsx.ejs"),
    icon: await getTemplateSource("named-icon.tsx.ejs"),
    types: await getTemplateSource("types.tsx"),
  }
  
  const firstIcon = Object.values(icons)[0]
  const iconsWithVariants = Object.values<ITemplateIcon>(
    Object.keys(icons).reduce((iconsWithVariants: { [name: string]: ITemplateIcon }, iconId) => {
      const icon = iconsWithVariants[icons[iconId].svgName] || {
        ids: [],
        sizes: [],
        types: [],
        svgName: icons[iconId].svgName,
        jsxName: icons[iconId].jsxName,
        metadata: metadata.generateIconMetadata(icons[iconId])  
      }
      icon.ids = _.uniq(icon.ids.concat(icons[iconId].id))
      icon.sizes = _.uniq(icon.sizes.concat(labelling.stripSizePrefix(icons[iconId].size)))
      icon.types = _.uniq(icon.types.concat(icons[iconId].type))

      iconsWithVariants[icons[iconId].svgName] = icon

      return iconsWithVariants
    }, {}),
  )

  const iconsByCategory = iconsWithVariants.reduce(
    (acc, icon) => {
      const category = icon.types[0] || "ai"
      if (!acc[category]) {
        acc[category] = []
      }
      acc[category].push(icon)
      return acc
    },
    {} as Record<string, ITemplateIcon[]>,
  )

  const templateHelpers = {
    getDefaultSize() {
      return labelling.stripSizePrefix(firstIcon.size)
    },
    getDefaultType() {
      return firstIcon.type
    },
    iconToComponentName(icon: ITemplateIcon) {
      return `${icon.jsxName}`
    },
    iconToPropsName(icon: ITemplateIcon) {
      return `${icon.jsxName}Props`
    },
    iconToReactFileName(icon: ITemplateIcon) {
      return `${icon.jsxName}.tsx`
    },
    iconToSVGSourceAsJSX(icon: ITemplateIcon, size: string, type: string) {
      const filePath = labelling.filePathFromIcon({
        id: icon.ids[0],
        svgName: icon.svgName,
        jsxName: icon.jsxName,
        size,
        type,
      })
      return filePathToSVGinJSXSync(filePath)
    },
    iconHasSizeAndType(icon: ITemplateIcon, size: string, type: string) {
      return icon.ids.some((iconId) => {
        const prefixedSize = labelling.addSizePrefix(size)
        return icons[iconId].size === prefixedSize && icons[iconId].type === type
      })
    },
    stripExtension(fileName: string) {
      return fileName.replace(/(.*)\.\w+$/, "$1")
    },
  }

  const prettierOptions = await prettier.resolveConfig(process.cwd())

  for (const i in iconsWithVariants) {
    const icon = iconsWithVariants[i]
    const iconSourceRaw = await ejs.render(templates.icon, {
      icon,
      ...templateHelpers,
    })
    const iconSource = await prettier.format(iconSourceRaw, {
      ...prettierOptions,
      parser: "typescript",
    })

    const iconComponentFilePath = path.resolve(
      currentTempDir,
      labelling.componentFilePathFromIcon({
        id: icon.ids[0],
        svgName: icon.svgName,
        jsxName: icon.jsxName,
        size: icon.sizes[0],
        type: icon.types[0],
      }),
    )
    await fse.outputFile(iconComponentFilePath, iconSource)
    currentListOfAddedFiles.push(iconComponentFilePath)
  }

  for (const category in iconsByCategory) {
    const categoryIcons = iconsByCategory[category]
    const categoryIndexContent = categoryIcons
      .map(
        (icon) =>
          `export { default as ${templateHelpers.iconToComponentName(icon)} } from "./${templateHelpers.iconToComponentName(icon)}";`,
      )
      .join("\n")

    const categoryIndexPath = path.resolve(currentTempDir, "src", category, "index.ts")
    await fse.outputFile(categoryIndexPath, categoryIndexContent)
    currentListOfAddedFiles.push(categoryIndexPath)
  }

  const entrySourceRaw = await ejs.render(templates.entry, {
    iconsByCategory,
    ...templateHelpers,
  })
  const entrySource = await prettier.format(entrySourceRaw, {
    ...prettierOptions,
    parser: "typescript",
  })
  const entryFilePath = path.resolve(currentTempDir, FILE_PATH_ENTRY)
  await fse.outputFile(entryFilePath, entrySource)
  currentListOfAddedFiles.push(entryFilePath)

  /* Generate Type Modules */
  const typeDepsFilePath = path.resolve(currentTempDir, FILE_PATH_TYPES)
  await fse.outputFile(typeDepsFilePath, templates.types)
  currentListOfAddedFiles.push(typeDepsFilePath)
}

export async function getCurrentIconManifest(): Promise<IIconManifest> {
  const { stdout: gitRootDir } = await execa("git", ["rev-parse", "--show-toplevel"])
  const gitRelativePathToManifest = path.relative(gitRootDir, path.resolve(process.cwd(), FILE_PATH_MANIFEST))
  const { stdout: currentManifest } = await execa("git", ["show", `HEAD:${gitRelativePathToManifest}`])
  return JSON.parse(currentManifest)
}

export async function generateIconManifest(icons: IIcons) {
  const iconManifestFilePath = path.resolve(currentTempDir, FILE_PATH_MANIFEST)
  
  // Choose which format you prefer:
  // const iconManifest = iconsToRegistry(icons)           // Full shadcn-style
  // const iconManifest = iconsToSimpleManifest(icons)     // Simple flat structure  
  const iconManifest = iconsToComponentManifest(icons)     // Component-focused
  
  let iconManifestRaw = JSON.stringify(iconManifest, null, 2)
  const prettierOptions = await prettier.resolveConfig(process.cwd())
  iconManifestRaw = await prettier.format(iconManifestRaw, {
    ...prettierOptions,
    parser: "json",
  })
  
  // For comparison, get the previous manifest in the same format
  let previousIconManifest: any = {}
  try {
    previousIconManifest = await getCurrentIconManifest()
  } catch (error) {
    // If no previous manifest exists, use empty object
    previousIconManifest = { components: {}, categories: {}, total: 0 }
  }
  
  await fs.promises.writeFile(iconManifestFilePath, iconManifestRaw, {
    encoding: "utf8",
  })
  currentListOfAddedFiles.push(iconManifestFilePath)
  return [previousIconManifest, iconManifest]
}

export async function swapGeneratedFiles(
  previousIconManifest: IIconManifest,
  nextIconManifest: IIconManifest,
): Promise<string[]> {
  /* We must find all dirs and files that were generated, and remove them: */
  let generatedFilePaths: string[] = []
  //  1. The top-level dirs for previous SVGs
  pushObjLeafNodesToArr(previousIconManifest, generatedFilePaths)
  //  2. The top-level dirs needed for new SVGs
  pushObjLeafNodesToArr(nextIconManifest, generatedFilePaths)
  //  3. The top-level dirs for generated source
  generatedFilePaths = generatedFilePaths.concat([FILE_PATH_ENTRY, FILE_PATH_TYPES])
  const topLevelDirs: string[] = _.uniq(generatedFilePaths.map((filePath) => filePath.replace(/^([\w-]+).*/, "$1")))
  for (const i in topLevelDirs) {
    const topLevelDir = topLevelDirs[i]
    await fse.remove(path.resolve(process.cwd(), topLevelDir))
  }
  //  4. The manifest file
  await fse.remove(path.resolve(process.cwd(), FILE_PATH_MANIFEST))

  /* Then we take all the contents of our temp dir and copy them to cwd: */
  await fse.copy(currentTempDir, process.cwd())

  return [...topLevelDirs, FILE_PATH_MANIFEST]
}

export async function getGitCustomDiff(touchedPaths: string[]): Promise<IDiffSummary[]> {
  const { stdout: gitRootDir } = await execa("git", ["rev-parse", "--show-toplevel"])
  /* Stage all changes to tracked files. */
  /* Stage the "intent" to add for all untracked files. */
  await execa("git", ["add", "-f", "--ignore-removal", "--intent-to-add", "--", ...touchedPaths])
  /* Grab the lines changed per file, as well as the kind of change (D, M, A) */
  const [{ stdout: numstatRaw }, { stdout: nameStatRaw }] = await Promise.all([
    execa("git", ["diff", "--numstat", "--no-renames", "--", FOLDER_PATH_ICONS]),
    execa("git", ["diff", "--name-status", "--no-renames", "--", FOLDER_PATH_ICONS]),
  ])

  /* Transform the raw stdout to renderable data. */
  const nameStat = nameStatRaw.split("\n").map((line) => line[0])
  const diffSummaries: IDiffSummary[] = numstatRaw
    .split("\n")
    .map((line) => line.split("\t"))
    .map(([additions, deletions, filePath], i) => {
      const filePathFromCwd = filePath.replace(path.relative(gitRootDir, process.cwd()), "").replace(/^\//, "")

      return {
        status: nameStat[i] || "M",
        additions: Number.parseInt(additions, 10),
        deletions: Number.parseInt(deletions, 10),
        filePath: filePathFromCwd,
        fullFilePath: filePath,
      }
    })

  /* Undo the staging done above, to ensure an expected git status after this tool has been run. */
  await execa("git", ["reset", "HEAD", "--", FOLDER_PATH_ICONS])

  return diffSummaries
}

function isTagElement(element: object): element is { attribs: unknown } {
  return "attribs" in element && element.attribs !== undefined
}
