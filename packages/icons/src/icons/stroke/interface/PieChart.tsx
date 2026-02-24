
import * as React from "react"

export interface PieChartProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const PieChart = React.forwardRef<SVGSVGElement, PieChartProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M21.21 15.89A10 10 0 1 1 8 2.83"/><path d="M22 12A10 10 0 0 0 12 2v10z"/></g>` }}
      {...props}
    />
  )
)

PieChart.displayName = "PieChart"
