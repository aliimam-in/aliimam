
import * as React from "react"

export interface FolderSearchProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const FolderSearch = React.forwardRef<SVGSVGElement, FolderSearchProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M10.7 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v4.1M21 21l-1.9-1.9"/><circle cx="17" cy="17" r="3"/></g>` }}
      {...props}
    />
  )
)

FolderSearch.displayName = "FolderSearch"
