
import * as React from "react"

export interface SquaresIntersectProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const SquaresIntersect = React.forwardRef<SVGSVGElement, SquaresIntersectProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M10 22a2 2 0 0 1-2-2m6-18a2 2 0 0 1 2 2m0 18h-2M2 10V8m0-4a2 2 0 0 1 2-2m16 6a2 2 0 0 1 2 2m0 4v2m0 4a2 2 0 0 1-2 2M4 16a2 2 0 0 1-2-2m6-4a2 2 0 0 1 2-2h5a1 1 0 0 1 1 1v5a2 2 0 0 1-2 2H9a1 1 0 0 1-1-1zm0-8h2"/>` }}
      {...props}
    />
  )
)

SquaresIntersect.displayName = "SquaresIntersect"
