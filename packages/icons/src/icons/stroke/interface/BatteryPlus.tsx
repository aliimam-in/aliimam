
import * as React from "react"

export interface BatteryPlusProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const BatteryPlus = React.forwardRef<SVGSVGElement, BatteryPlusProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M10 9v6m2.543-9H16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-3.605M22 14v-4M7 12h6m-5.394 6H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3.606"/>` }}
      {...props}
    />
  )
)

BatteryPlus.displayName = "BatteryPlus"
