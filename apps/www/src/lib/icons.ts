import pixel from "../../../../packages/icons/src/data/pixel.json"
import solid from "../../../../packages/icons/src/data/solid.json"
import stroke from "../../../../packages/icons/src/data/stroke.json"
import glass from "../../../../packages/icons/src/data/glass.json"
import icon from "../../../../packages/logos/src/data/icon.json"
import wordmark from "../../../../packages/logos/src/data/wordmark.json"

export type IconMeta = {
  body: string
  hidden?: boolean
  viewBox?: string
}

export const strokeIcons = stroke.icons as Record<string, IconMeta>
export const solidIcons = solid.icons as Record<string, IconMeta>
export const pixelIcons = pixel.icons as Record<string, IconMeta>
export const glassIcons = glass.icons as Record<string, IconMeta>

export const iconIcons = icon.icons as Record<string, IconMeta>
export const wordmarkIcons = wordmark.icons as Record<string, IconMeta>

// Union of both icon names (unique)
export const iconNames = Array.from(
  new Set([
    ...Object.keys(strokeIcons),
    ...Object.keys(solidIcons),
    ...Object.keys(pixelIcons),
    ...Object.keys(glassIcons),

    ...Object.keys(iconIcons),
    ...Object.keys(wordmarkIcons),
  ])
).sort()
