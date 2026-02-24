
import * as React from "react"

export interface ChartNoAxesGanttProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const ChartNoAxesGantt = React.forwardRef<SVGSVGElement, ChartNoAxesGanttProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M6 5h12M4 12h10m-2 7h8"/>` }}
      {...props}
    />
  )
)

ChartNoAxesGantt.displayName = "ChartNoAxesGantt"
