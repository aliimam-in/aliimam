
import * as React from "react"

export interface DroneProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const Drone = React.forwardRef<SVGSVGElement, DroneProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M10 10L7 7m3 7l-3 3m7-7l3-3m-3 7l3 3M14.205 4.139a4 4 0 1 1 5.439 5.863M19.637 14a4 4 0 1 1-5.432 5.868M4.367 10a4 4 0 1 1 5.438-5.862m-.01 15.724a4 4 0 1 1-5.429-5.873"/><rect width="4" height="8" x="10" y="8" rx="1"/></g>` }}
      {...props}
    />
  )
)

Drone.displayName = "Drone"
