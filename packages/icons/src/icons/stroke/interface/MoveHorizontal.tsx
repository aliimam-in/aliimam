
import * as React from "react"

export interface MoveHorizontalProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const MoveHorizontal = React.forwardRef<SVGSVGElement, MoveHorizontalProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="m18 8l4 4l-4 4M2 12h20M6 8l-4 4l4 4"/>` }}
      {...props}
    />
  )
)

MoveHorizontal.displayName = "MoveHorizontal"
