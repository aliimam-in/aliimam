
import * as React from "react"

export interface CircleGaugeProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const CircleGauge = React.forwardRef<SVGSVGElement, CircleGaugeProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M15.6 2.7a10 10 0 1 0 5.7 5.7"/><circle cx="12" cy="12" r="2"/><path d="M13.4 10.6L19 5"/></g>` }}
      {...props}
    />
  )
)

CircleGauge.displayName = "CircleGauge"
