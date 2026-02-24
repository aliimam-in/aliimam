
import * as React from "react"

export interface BatteryMediumProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const BatteryMedium = React.forwardRef<SVGSVGElement, BatteryMediumProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M10 14v-4m12 4v-4M6 14v-4"/><rect width="16" height="12" x="2" y="6" rx="2"/></g>` }}
      {...props}
    />
  )
)

BatteryMedium.displayName = "BatteryMedium"
