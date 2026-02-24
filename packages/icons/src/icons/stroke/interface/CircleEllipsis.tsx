
import * as React from "react"

export interface CircleEllipsisProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const CircleEllipsis = React.forwardRef<SVGSVGElement, CircleEllipsisProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M17 12h.01M12 12h.01M7 12h.01"/></g>` }}
      {...props}
    />
  )
)

CircleEllipsis.displayName = "CircleEllipsis"
