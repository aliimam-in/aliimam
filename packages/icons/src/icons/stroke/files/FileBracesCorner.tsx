
import * as React from "react"

export interface FileBracesCornerProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const FileBracesCorner = React.forwardRef<SVGSVGElement, FileBracesCornerProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M14 22h4a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v6"/><path d="M14 2v5a1 1 0 0 0 1 1h5M5 14a1 1 0 0 0-1 1v2a1 1 0 0 1-1 1a1 1 0 0 1 1 1v2a1 1 0 0 0 1 1m4 0a1 1 0 0 0 1-1v-2a1 1 0 0 1 1-1a1 1 0 0 1-1-1v-2a1 1 0 0 0-1-1"/></g>` }}
      {...props}
    />
  )
)

FileBracesCorner.displayName = "FileBracesCorner"
