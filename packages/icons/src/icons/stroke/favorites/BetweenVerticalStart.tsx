
import * as React from "react"

export interface BetweenVerticalStartProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const BetweenVerticalStart = React.forwardRef<SVGSVGElement, BetweenVerticalStartProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><rect width="7" height="13" x="3" y="8" rx="1"/><path d="m15 2l-3 3l-3-3"/><rect width="7" height="13" x="14" y="8" rx="1"/></g>` }}
      {...props}
    />
  )
)

BetweenVerticalStart.displayName = "BetweenVerticalStart"
