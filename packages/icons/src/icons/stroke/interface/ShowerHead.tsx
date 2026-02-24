
import * as React from "react"

export interface ShowerHeadProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const ShowerHead = React.forwardRef<SVGSVGElement, ShowerHeadProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="m4 4l2.5 2.5m7 0a4.95 4.95 0 0 0-7 7M15 5L5 15m9 2v.01M10 16v.01M13 13v.01M16 10v.01M11 20v.01M17 14v.01M20 11v.01"/>` }}
      {...props}
    />
  )
)

ShowerHead.displayName = "ShowerHead"
