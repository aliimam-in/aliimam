
import * as React from "react"

export interface TrendingUpProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const TrendingUp = React.forwardRef<SVGSVGElement, TrendingUpProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M16 7h6v6"/><path d="m22 7l-8.5 8.5l-5-5L2 17"/></g>` }}
      {...props}
    />
  )
)

TrendingUp.displayName = "TrendingUp"
