
import * as React from "react"

export interface MapPinOffProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const MapPinOff = React.forwardRef<SVGSVGElement, MapPinOffProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M12.75 7.09a3 3 0 0 1 2.16 2.16m2.162 7.822c-1.634 2.17-3.527 3.912-4.471 4.727a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 1.432-4.568M2 2l20 20"/><path d="M8.475 2.818A8 8 0 0 1 20 10c0 1.183-.31 2.377-.81 3.533M9.13 9.13a3 3 0 0 0 3.74 3.74"/></g>` }}
      {...props}
    />
  )
)

MapPinOff.displayName = "MapPinOff"
