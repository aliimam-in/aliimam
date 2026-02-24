
import * as React from "react"

export interface ParkingMeterProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const ParkingMeter = React.forwardRef<SVGSVGElement, ParkingMeterProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M11 15h2m-1-3v3m0 4v3m3.282-3a1 1 0 0 0 .948-.68l2.37-6.988a7 7 0 1 0-13.2 0l2.37 6.988a1 1 0 0 0 .948.68z"/><path d="M9 9a3 3 0 1 1 6 0"/></g>` }}
      {...props}
    />
  )
)

ParkingMeter.displayName = "ParkingMeter"
