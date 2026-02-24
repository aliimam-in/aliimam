
import * as React from "react"

export interface TentTreeProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const TentTree = React.forwardRef<SVGSVGElement, TentTreeProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><circle cx="4" cy="4" r="2"/><path d="m14 5l3-3l3 3m-6 5l3-3l3 3m-3 4V2m0 12H7l-5 8h20Zm-9 0v8m1-8l5 8"/></g>` }}
      {...props}
    />
  )
)

TentTree.displayName = "TentTree"
