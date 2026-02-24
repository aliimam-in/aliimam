
import * as React from "react"

export interface SlidersVerticalProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const SlidersVertical = React.forwardRef<SVGSVGElement, SlidersVerticalProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M10 8h4m-2 13v-9m0-4V3m5 13h4m-2-4V3m0 18v-5M3 14h4m-2-4V3m0 18v-7"/>` }}
      {...props}
    />
  )
)

SlidersVertical.displayName = "SlidersVertical"
