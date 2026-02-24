
import * as React from "react"

export interface CirclePercentProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const CirclePercent = React.forwardRef<SVGSVGElement, CirclePercentProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="m15 9l-6 6m0-6h.01M15 15h.01"/></g>` }}
      {...props}
    />
  )
)

CirclePercent.displayName = "CirclePercent"
