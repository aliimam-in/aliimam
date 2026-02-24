
import * as React from "react"

export interface SquareArrowRightEnterProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const SquareArrowRightEnter = React.forwardRef<SVGSVGElement, SquareArrowRightEnterProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="m10 16l4-4l-4-4m-7 4h11"/><path d="M3 8V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3"/></g>` }}
      {...props}
    />
  )
)

SquareArrowRightEnter.displayName = "SquareArrowRightEnter"
