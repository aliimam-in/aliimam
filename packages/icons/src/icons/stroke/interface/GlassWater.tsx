
import * as React from "react"

export interface GlassWaterProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const GlassWater = React.forwardRef<SVGSVGElement, GlassWaterProps>(
  ({ size = 24, ...props }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M5.116 4.104A1 1 0 0 1 6.11 3h11.78a1 1 0 0 1 .994 1.105L17.19 20.21A2 2 0 0 1 15.2 22H8.8a2 2 0 0 1-2-1.79z"/><path d="M6 12a5 5 0 0 1 6 0a5 5 0 0 0 6 0"/></g>` }}
      {...props}
    />
  )
)

GlassWater.displayName = "GlassWater"
