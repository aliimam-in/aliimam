
import * as React from "react"

export interface RotateCcwSquareProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const RotateCcwSquare = React.forwardRef<SVGSVGElement, RotateCcwSquareProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M20 9V7a2 2 0 0 0-2-2h-6"/><path d="m15 2l-3 3l3 3m5 5v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2"/></g>` }}
      {...props}
    />
  )
)

RotateCcwSquare.displayName = "RotateCcwSquare"
