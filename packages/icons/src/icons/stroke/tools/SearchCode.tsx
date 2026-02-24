
import * as React from "react"

export interface SearchCodeProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const SearchCode = React.forwardRef<SVGSVGElement, SearchCodeProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="m13 13.5l2-2.5l-2-2.5M21 21l-4.3-4.3M9 8.5L7 11l2 2.5"/><circle cx="11" cy="11" r="8"/></g>` }}
      {...props}
    />
  )
)

SearchCode.displayName = "SearchCode"
