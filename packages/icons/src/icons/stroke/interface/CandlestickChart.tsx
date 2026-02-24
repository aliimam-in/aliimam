
import * as React from "react"

export interface CandlestickChartProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const CandlestickChart = React.forwardRef<SVGSVGElement, CandlestickChartProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M9 5v4"/><rect width="4" height="6" x="7" y="9" rx="1"/><path d="M9 15v2m8-14v2"/><rect width="4" height="8" x="15" y="5" rx="1"/><path d="M17 13v3M3 3v18h18"/></g>` }}
      {...props}
    />
  )
)

CandlestickChart.displayName = "CandlestickChart"
