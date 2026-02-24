
import * as React from "react"

export interface FolderDownProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const FolderDown = React.forwardRef<SVGSVGElement, FolderDownProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Zm-8-10v6"/><path d="m15 13l-3 3l-3-3"/></g>` }}
      {...props}
    />
  )
)

FolderDown.displayName = "FolderDown"
