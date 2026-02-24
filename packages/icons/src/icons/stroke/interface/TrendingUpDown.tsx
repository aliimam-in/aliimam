
import * as React from "react"

export interface TrendingUpDownProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const TrendingUpDown = React.forwardRef<SVGSVGElement, TrendingUpDownProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M14.828 14.828L21 21m0-5v5h-5m5-18l-9 9l-4-4l-6 6"/><path d="M21 8V3h-5"/></g>` }}
      {...props}
    />
  )
)

TrendingUpDown.displayName = "TrendingUpDown"
