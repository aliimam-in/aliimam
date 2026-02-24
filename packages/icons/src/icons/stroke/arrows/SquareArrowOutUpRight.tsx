
import * as React from "react"

export interface SquareArrowOutUpRightProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const SquareArrowOutUpRight = React.forwardRef<SVGSVGElement, SquareArrowOutUpRightProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6m10 0l-9 9m3-9h6v6"/>` }}
      {...props}
    />
  )
)

SquareArrowOutUpRight.displayName = "SquareArrowOutUpRight"
