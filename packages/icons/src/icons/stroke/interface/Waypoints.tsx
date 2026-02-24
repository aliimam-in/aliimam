
import * as React from "react"

export interface WaypointsProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const Waypoints = React.forwardRef<SVGSVGElement, WaypointsProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="m10.586 5.414l-5.172 5.172m13.172 2.828l-5.172 5.172M6 12h12"/><circle cx="12" cy="20" r="2"/><circle cx="12" cy="4" r="2"/><circle cx="20" cy="12" r="2"/><circle cx="4" cy="12" r="2"/></g>` }}
      {...props}
    />
  )
)

Waypoints.displayName = "Waypoints"
