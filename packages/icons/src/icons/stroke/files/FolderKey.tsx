
import * as React from "react"

export interface FolderKeyProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const FolderKey = React.forwardRef<SVGSVGElement, FolderKeyProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M13 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v1.36M19 12v6m0-4h2"/><circle cx="19" cy="20" r="2"/></g>` }}
      {...props}
    />
  )
)

FolderKey.displayName = "FolderKey"
