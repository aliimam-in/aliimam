
import * as React from "react"

export interface SlidersHorizontalProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const SlidersHorizontal = React.forwardRef<SVGSVGElement, SlidersHorizontalProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M10 5H3m9 14H3M14 3v4m2 10v4m5-9h-9m9 7h-5m5-14h-7m-6 5v4m0-2H3"/>` }}
      {...props}
    />
  )
)

SlidersHorizontal.displayName = "SlidersHorizontal"
