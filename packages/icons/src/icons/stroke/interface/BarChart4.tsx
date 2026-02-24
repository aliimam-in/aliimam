
import * as React from "react"

export interface BarChart4Props extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const BarChart4 = React.forwardRef<SVGSVGElement, BarChart4Props>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M3 3v18h18m-8-4V9m5 8V5M8 17v-3"/>` }}
      {...props}
    />
  )
)

BarChart4.displayName = "BarChart4"
