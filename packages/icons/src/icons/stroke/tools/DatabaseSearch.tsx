
import * as React from "react"

export interface DatabaseSearchProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const DatabaseSearch = React.forwardRef<SVGSVGElement, DatabaseSearchProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M21 11.693V5m1 17l-1.875-1.875M3 12a9 3 0 0 0 8.697 2.998"/><path d="M3 5v14a9 3 0 0 0 9.28 2.999"/><circle cx="18" cy="18" r="3"/><ellipse cx="12" cy="5" rx="9" ry="3"/></g>` }}
      {...props}
    />
  )
)

DatabaseSearch.displayName = "DatabaseSearch"
