
import * as React from "react"

export interface SatelliteDishProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const SatelliteDish = React.forwardRef<SVGSVGElement, SatelliteDishProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M4 10a7.31 7.31 0 0 0 10 10Zm5 5l3-3m5 1a6 6 0 0 0-6-6m10 6A10 10 0 0 0 11 3"/>` }}
      {...props}
    />
  )
)

SatelliteDish.displayName = "SatelliteDish"
