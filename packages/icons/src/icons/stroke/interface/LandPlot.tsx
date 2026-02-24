
import * as React from "react"

export interface LandPlotProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const LandPlot = React.forwardRef<SVGSVGElement, LandPlotProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="m12 8l6-3l-6-3v10"/><path d="m8 11.99l-5.5 3.14a1 1 0 0 0 0 1.74l8.5 4.86a2 2 0 0 0 2 0l8.5-4.86a1 1 0 0 0 0-1.74L16 12m-9.51.85l11.02 6.3m0-6.3L6.5 19.15"/></g>` }}
      {...props}
    />
  )
)

LandPlot.displayName = "LandPlot"
