
import * as React from "react"

export interface BarChartBigProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const BarChartBig = React.forwardRef<SVGSVGElement, BarChartBigProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M3 3v18h18"/><rect width="4" height="7" x="7" y="10" rx="1"/><rect width="4" height="12" x="15" y="5" rx="1"/></g>` }}
      {...props}
    />
  )
)

BarChartBig.displayName = "BarChartBig"
