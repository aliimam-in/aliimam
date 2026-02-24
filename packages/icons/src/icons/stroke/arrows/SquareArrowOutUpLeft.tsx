
import * as React from "react"

export interface SquareArrowOutUpLeftProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const SquareArrowOutUpLeft = React.forwardRef<SVGSVGElement, SquareArrowOutUpLeftProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M13 3h6a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-6M3 3l9 9M3 9V3h6"/>` }}
      {...props}
    />
  )
)

SquareArrowOutUpLeft.displayName = "SquareArrowOutUpLeft"
