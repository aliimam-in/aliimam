
import * as React from "react"

export interface PackageSearchProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const PackageSearch = React.forwardRef<SVGSVGElement, PackageSearchProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14M7.5 4.27l9 5.15"/><path d="M3.29 7L12 12l8.71-5M12 22V12"/><circle cx="18.5" cy="15.5" r="2.5"/><path d="M20.27 17.27L22 19"/></g>` }}
      {...props}
    />
  )
)

PackageSearch.displayName = "PackageSearch"
