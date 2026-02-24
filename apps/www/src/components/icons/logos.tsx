import { iconIcons, wordmarkIcons } from "@/src/lib/icons"

interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: string
  size?: number
  variant?: "icon" | "wordmark"
  color?: string
}

export function Logos({
  name,
  size = 24,
  variant = "icon",
  color = "currentColor",
  ...props
}: IconProps) {
  const iconSet = variant === "icon" ? iconIcons : wordmarkIcons
  const icon = iconSet[name]
  if (!icon) return null

  // Replace only currentColor fills with the selected color
  const svgBody = icon.body.replace(/fill="currentColor"/g, `fill="${color}"`)

  return (
    <svg
      width={size}
      height={size}
      viewBox={icon.viewBox || "0 0 24 24"}
      dangerouslySetInnerHTML={{ __html: svgBody }}
      {...props}
    />
  )
}
