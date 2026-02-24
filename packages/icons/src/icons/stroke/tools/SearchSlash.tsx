
import * as React from "react"

export interface SearchSlashProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const SearchSlash = React.forwardRef<SVGSVGElement, SearchSlashProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="m13.5 8.5l-5 5"/><circle cx="11" cy="11" r="8"/><path d="m21 21l-4.3-4.3"/></g>` }}
      {...props}
    />
  )
)

SearchSlash.displayName = "SearchSlash"
