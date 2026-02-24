
import * as React from "react"

export interface BetweenHorizontalStartProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const BetweenHorizontalStart = React.forwardRef<SVGSVGElement, BetweenHorizontalStartProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><rect width="13" height="7" x="8" y="3" rx="1"/><path d="m2 9l3 3l-3 3"/><rect width="13" height="7" x="8" y="14" rx="1"/></g>` }}
      {...props}
    />
  )
)

BetweenHorizontalStart.displayName = "BetweenHorizontalStart"
