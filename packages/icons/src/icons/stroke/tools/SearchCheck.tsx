
import * as React from "react"

export interface SearchCheckProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const SearchCheck = React.forwardRef<SVGSVGElement, SearchCheckProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="m8 11l2 2l4-4"/><circle cx="11" cy="11" r="8"/><path d="m21 21l-4.3-4.3"/></g>` }}
      {...props}
    />
  )
)

SearchCheck.displayName = "SearchCheck"
