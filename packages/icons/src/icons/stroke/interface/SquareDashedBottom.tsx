
import * as React from "react"

export interface SquareDashedBottomProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const SquareDashedBottom = React.forwardRef<SVGSVGElement, SquareDashedBottomProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M5 21a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2M9 21h1m4 0h1"/>` }}
      {...props}
    />
  )
)

SquareDashedBottom.displayName = "SquareDashedBottom"
