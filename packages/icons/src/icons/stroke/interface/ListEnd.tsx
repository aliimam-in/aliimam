
import * as React from "react"

export interface ListEndProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const ListEnd = React.forwardRef<SVGSVGElement, ListEndProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M16 5H3m13 7H3m6 7H3m13-3l-3 3l3 3"/><path d="M21 5v12a2 2 0 0 1-2 2h-6"/></g>` }}
      {...props}
    />
  )
)

ListEnd.displayName = "ListEnd"
