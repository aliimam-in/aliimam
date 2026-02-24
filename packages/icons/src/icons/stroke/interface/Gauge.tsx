
import * as React from "react"

export interface GaugeProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const Gauge = React.forwardRef<SVGSVGElement, GaugeProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="m12 14l4-4M3.34 19a10 10 0 1 1 17.32 0"/>` }}
      {...props}
    />
  )
)

Gauge.displayName = "Gauge"
