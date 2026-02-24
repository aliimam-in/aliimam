
import * as React from "react"

export interface MoveUpRightProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const MoveUpRight = React.forwardRef<SVGSVGElement, MoveUpRightProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M13 5h6v6m0-6L5 19"/>` }}
      {...props}
    />
  )
)

MoveUpRight.displayName = "MoveUpRight"
