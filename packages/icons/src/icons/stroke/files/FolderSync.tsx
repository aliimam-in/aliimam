
import * as React from "react"

export interface FolderSyncProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const FolderSync = React.forwardRef<SVGSVGElement, FolderSyncProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v.5"/><path d="M12 10v4h4"/><path d="m12 14l1.535-1.605a5 5 0 0 1 8 1.5M22 22v-4h-4"/><path d="m22 18l-1.535 1.605a5 5 0 0 1-8-1.5"/></g>` }}
      {...props}
    />
  )
)

FolderSync.displayName = "FolderSync"
