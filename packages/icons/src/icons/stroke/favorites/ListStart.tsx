
import * as React from "react"

export interface ListStartProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const ListStart = React.forwardRef<SVGSVGElement, ListStartProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M3 5h6m-6 7h13M3 19h13m0-11l-3-3l3-3"/><path d="M21 19V7a2 2 0 0 0-2-2h-6"/></g>` }}
      {...props}
    />
  )
)

ListStart.displayName = "ListStart"
