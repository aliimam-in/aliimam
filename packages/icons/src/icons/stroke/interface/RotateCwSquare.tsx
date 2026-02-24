
import * as React from "react"

export interface RotateCwSquareProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const RotateCwSquare = React.forwardRef<SVGSVGElement, RotateCwSquareProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M12 5H6a2 2 0 0 0-2 2v3"/><path d="m9 8l3-3l-3-3M4 14v4a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"/></g>` }}
      {...props}
    />
  )
)

RotateCwSquare.displayName = "RotateCwSquare"
