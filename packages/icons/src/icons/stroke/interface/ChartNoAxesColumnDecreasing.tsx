
import * as React from "react"

export interface ChartNoAxesColumnDecreasingProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const ChartNoAxesColumnDecreasing = React.forwardRef<SVGSVGElement, ChartNoAxesColumnDecreasingProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M5 21V3m7 18V9m7 12v-6"/>` }}
      {...props}
    />
  )
)

ChartNoAxesColumnDecreasing.displayName = "ChartNoAxesColumnDecreasing"
