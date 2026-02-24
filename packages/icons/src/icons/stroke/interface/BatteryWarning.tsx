
import * as React from "react"

export interface BatteryWarningProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const BatteryWarning = React.forwardRef<SVGSVGElement, BatteryWarningProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M10 17h.01M10 7v6m4-7h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2m8-4v-4M6 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2"/>` }}
      {...props}
    />
  )
)

BatteryWarning.displayName = "BatteryWarning"
