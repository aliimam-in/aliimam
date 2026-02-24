
import * as React from "react"

export interface LineChartProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const LineChart = React.forwardRef<SVGSVGElement, LineChartProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M3 3v18h18"/><path d="m19 9l-5 5l-4-4l-3 3"/></g>` }}
      {...props}
    />
  )
)

LineChart.displayName = "LineChart"
