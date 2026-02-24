
import * as React from "react"

export interface ArchiveRestoreProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const ArchiveRestore = React.forwardRef<SVGSVGElement, ArchiveRestoreProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><rect width="20" height="5" x="2" y="3" rx="1"/><path d="M4 8v11a2 2 0 0 0 2 2h2M20 8v11a2 2 0 0 1-2 2h-2m-7-6l3-3l3 3m-3-3v9"/></g>` }}
      {...props}
    />
  )
)

ArchiveRestore.displayName = "ArchiveRestore"
