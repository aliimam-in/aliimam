
import * as React from "react"

export interface FilePieChartProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const FilePieChart = React.forwardRef<SVGSVGElement, FilePieChartProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M16 22h2a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3.5m.017 4.012a6 6 0 1 0 8.466 8.475"/><path d="M8 16v-6a6 6 0 0 1 6 6z"/></g>` }}
      {...props}
    />
  )
)

FilePieChart.displayName = "FilePieChart"
