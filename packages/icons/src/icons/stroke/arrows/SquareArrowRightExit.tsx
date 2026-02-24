
import * as React from "react"

export interface SquareArrowRightExitProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const SquareArrowRightExit = React.forwardRef<SVGSVGElement, SquareArrowRightExitProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M10 12h11m-4 4l4-4l-4-4"/><path d="M21 6.344V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-1.344"/></g>` }}
      {...props}
    />
  )
)

SquareArrowRightExit.displayName = "SquareArrowRightExit"
