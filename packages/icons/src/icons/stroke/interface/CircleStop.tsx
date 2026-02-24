
import * as React from "react"

export interface CircleStopProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const CircleStop = React.forwardRef<SVGSVGElement, CircleStopProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><rect width="6" height="6" x="9" y="9" rx="1"/></g>` }}
      {...props}
    />
  )
)

CircleStop.displayName = "CircleStop"
