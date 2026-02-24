
import * as React from "react"

export interface BatteryChargingProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const BatteryCharging = React.forwardRef<SVGSVGElement, BatteryChargingProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="m11 7l-3 5h4l-3 5m5.856-11H16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.935M22 14v-4M5.14 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2.936"/>` }}
      {...props}
    />
  )
)

BatteryCharging.displayName = "BatteryCharging"
