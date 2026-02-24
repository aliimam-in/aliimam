import {
  glassIcons,
  pixelIcons,
  solidIcons,
  strokeIcons,
} from "@/src/lib/icons"

interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: string
  size?: number
  variant?: "stroke" | "solid" | "pixel" | "glass"
  strokeWidth?: number
  color?: string
}

function cleanSvgBody(body: string) {
  return body
    .replace(/stroke=".*?"/g, "")
    .replace(/fill=".*?"/g, "")
    .replace(/stroke-width=".*?"/g, "")
}

export function Icon({
  name,
  size = 24,
  variant = "stroke",
  strokeWidth = 2,
  color = "currentColor",
  ...props
}: IconProps) {
  const iconSet =
    variant === "solid"
      ? solidIcons
      : variant === "stroke"
        ? strokeIcons
        : variant === "pixel"
          ? pixelIcons
          : glassIcons

  const icon = iconSet[name]
  if (!icon) return null

  const cleanedBody = cleanSvgBody(icon.body)

  return (
    <svg
      width={size}
      height={size}
      viewBox={icon.viewBox || "0 0 24 24"}
      fill={variant === "solid" || variant === "glass" ? color : "none"}
      stroke={variant === "stroke" || variant === "pixel" ? color : "none"}
      strokeWidth={
        variant === "stroke" || variant === "pixel" ? strokeWidth : 1
      }
      strokeLinecap="round"
      strokeLinejoin="round"
      dangerouslySetInnerHTML={{ __html: cleanedBody }}
      {...props}
    />
  )
}
