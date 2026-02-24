
import * as React from "react"

export interface ArrowLeftRightProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const ArrowLeftRight = React.forwardRef<SVGSVGElement, ArrowLeftRightProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M8 3L4 7l4 4M4 7h16m-4 14l4-4l-4-4m4 4H4"/>` }}
      {...props}
    />
  )
)

ArrowLeftRight.displayName = "ArrowLeftRight"
