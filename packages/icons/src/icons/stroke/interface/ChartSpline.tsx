
import * as React from "react"

export interface ChartSplineProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const ChartSpline = React.forwardRef<SVGSVGElement, ChartSplineProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M3 3v16a2 2 0 0 0 2 2h16"/><path d="M7 16c.5-2 1.5-7 4-7c2 0 2 3 4 3c2.5 0 4.5-5 5-7"/></g>` }}
      {...props}
    />
  )
)

ChartSpline.displayName = "ChartSpline"
