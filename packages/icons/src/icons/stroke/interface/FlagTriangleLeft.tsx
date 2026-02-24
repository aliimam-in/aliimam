
import * as React from "react"

export interface FlagTriangleLeftProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const FlagTriangleLeft = React.forwardRef<SVGSVGElement, FlagTriangleLeftProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M18 22V2.8a.8.8 0 0 0-1.17-.71L5.45 7.78a.8.8 0 0 0 0 1.44L18 15.5"/>` }}
      {...props}
    />
  )
)

FlagTriangleLeft.displayName = "FlagTriangleLeft"
