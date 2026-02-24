
import * as React from "react"

export interface MoveDiagonalProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const MoveDiagonal = React.forwardRef<SVGSVGElement, MoveDiagonalProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M11 19H5v-6m8-8h6v6m0-6L5 19"/>` }}
      {...props}
    />
  )
)

MoveDiagonal.displayName = "MoveDiagonal"
