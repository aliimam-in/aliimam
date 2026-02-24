
import * as React from "react"

export interface AreaChartProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const AreaChart = React.forwardRef<SVGSVGElement, AreaChartProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M3 3v18h18"/><path d="M7 12v5h12V8l-5 5l-4-4Z"/></g>` }}
      {...props}
    />
  )
)

AreaChart.displayName = "AreaChart"
