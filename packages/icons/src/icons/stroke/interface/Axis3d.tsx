
import * as React from "react"

export interface Axis3dProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const Axis3d = React.forwardRef<SVGSVGElement, Axis3dProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M13.5 10.5L15 9M4 4v15a1 1 0 0 0 1 1h15m-15.707-.293L6 18m3-3l1.5-1.5"/>` }}
      {...props}
    />
  )
)

Axis3d.displayName = "Axis3d"
