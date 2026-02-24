
import * as React from "react"

export interface SquaresSubtractProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const SquaresSubtract = React.forwardRef<SVGSVGElement, SquaresSubtractProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M10 22a2 2 0 0 1-2-2m8 2h-2m2-18a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-5a2 2 0 0 1 2-2h5a1 1 0 0 0 1-1zm4 4a2 2 0 0 1 2 2m0 4v2m0 4a2 2 0 0 1-2 2"/>` }}
      {...props}
    />
  )
)

SquaresSubtract.displayName = "SquaresSubtract"
