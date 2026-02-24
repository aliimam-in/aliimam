
import * as React from "react"

export interface SquareBottomDashedScissorsProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const SquareBottomDashedScissors = React.forwardRef<SVGSVGElement, SquareBottomDashedScissorsProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M5 3h14M3 5v14M21 5v14M9 21h1m4 0h1M3 5a2 2 0 0 1 2-2m14 0a2 2 0 0 1 2 2M5 21a2 2 0 0 1-2-2m18 0a2 2 0 0 1-2 2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M9.561 9.561L12 12m5 5l-2.18-2.18"/><circle cx="8.5" cy="15.5" r="1.5"/><path d="M9.561 14.439L17 7"/></g>` }}
      {...props}
    />
  )
)

SquareBottomDashedScissors.displayName = "SquareBottomDashedScissors"
