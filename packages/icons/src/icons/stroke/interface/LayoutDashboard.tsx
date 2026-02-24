
import * as React from "react"

export interface LayoutDashboardProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const LayoutDashboard = React.forwardRef<SVGSVGElement, LayoutDashboardProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/></g>` }}
      {...props}
    />
  )
)

LayoutDashboard.displayName = "LayoutDashboard"
