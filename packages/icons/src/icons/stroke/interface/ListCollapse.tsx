
import * as React from "react"

export interface ListCollapseProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const ListCollapse = React.forwardRef<SVGSVGElement, ListCollapseProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M10 5h11m-11 7h11m-11 7h11M3 10l3-3l-3-3m0 16l3-3l-3-3"/>` }}
      {...props}
    />
  )
)

ListCollapse.displayName = "ListCollapse"
