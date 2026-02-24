
import * as React from "react"

export interface TriangleProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const Triangle = React.forwardRef<SVGSVGElement, TriangleProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/>` }}
      {...props}
    />
  )
)

Triangle.displayName = "Triangle"
