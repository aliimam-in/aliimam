
import * as React from "react"

export interface SquareArrowOutDownLeftProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const SquareArrowOutDownLeft = React.forwardRef<SVGSVGElement, SquareArrowOutDownLeftProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M13 21h6a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v6m0 10l9-9m-3 9H3v-6"/>` }}
      {...props}
    />
  )
)

SquareArrowOutDownLeft.displayName = "SquareArrowOutDownLeft"
