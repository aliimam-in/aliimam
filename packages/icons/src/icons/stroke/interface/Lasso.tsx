
import * as React from "react"

export interface LassoProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const Lasso = React.forwardRef<SVGSVGElement, LassoProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M3.704 14.467a10 8 0 1 1 3.115 2.375M7 22a5 5 0 0 1-2-3.994"/><circle cx="5" cy="16" r="2"/></g>` }}
      {...props}
    />
  )
)

Lasso.displayName = "Lasso"
