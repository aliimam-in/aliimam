
import * as React from "react"

export interface BarChartHorizontalProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const BarChartHorizontal = React.forwardRef<SVGSVGElement, BarChartHorizontalProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M3 3v18h18M7 16h8m-8-5h12M7 6h3"/>` }}
      {...props}
    />
  )
)

BarChartHorizontal.displayName = "BarChartHorizontal"
