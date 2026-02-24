
import * as React from "react"

export interface TrendingDownProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const TrendingDown = React.forwardRef<SVGSVGElement, TrendingDownProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M16 17h6v-6"/><path d="m22 17l-8.5-8.5l-5 5L2 7"/></g>` }}
      {...props}
    />
  )
)

TrendingDown.displayName = "TrendingDown"
