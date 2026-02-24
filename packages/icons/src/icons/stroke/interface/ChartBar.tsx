
import * as React from "react"

export interface ChartBarProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const ChartBar = React.forwardRef<SVGSVGElement, ChartBarProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M3 3v16a2 2 0 0 0 2 2h16M7 16h8m-8-5h12M7 6h3"/>` }}
      {...props}
    />
  )
)

ChartBar.displayName = "ChartBar"
