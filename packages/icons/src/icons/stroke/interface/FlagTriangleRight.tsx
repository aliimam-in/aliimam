
import * as React from "react"

export interface FlagTriangleRightProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const FlagTriangleRight = React.forwardRef<SVGSVGElement, FlagTriangleRightProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M6 22V2.8a.8.8 0 0 1 1.17-.71l11.38 5.69a.8.8 0 0 1 0 1.44L6 15.5"/>` }}
      {...props}
    />
  )
)

FlagTriangleRight.displayName = "FlagTriangleRight"
