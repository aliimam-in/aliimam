
import * as React from "react"

export interface SquareRoundCornerProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const SquareRoundCorner = React.forwardRef<SVGSVGElement, SquareRoundCornerProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M21 11a8 8 0 0 0-8-8m8 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>` }}
      {...props}
    />
  )
)

SquareRoundCorner.displayName = "SquareRoundCorner"
