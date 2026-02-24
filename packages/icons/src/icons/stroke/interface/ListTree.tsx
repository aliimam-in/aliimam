
import * as React from "react"

export interface ListTreeProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const ListTree = React.forwardRef<SVGSVGElement, ListTreeProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M8 5h13m-8 7h8m-8 7h8M3 10a2 2 0 0 0 2 2h3"/><path d="M3 5v12a2 2 0 0 0 2 2h3"/></g>` }}
      {...props}
    />
  )
)

ListTree.displayName = "ListTree"
