
import * as React from "react"

export interface ChartColumnIncreasingProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const ChartColumnIncreasing = React.forwardRef<SVGSVGElement, ChartColumnIncreasingProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M13 17V9m5 8V5M3 3v16a2 2 0 0 0 2 2h16M8 17v-3"/>` }}
      {...props}
    />
  )
)

ChartColumnIncreasing.displayName = "ChartColumnIncreasing"
