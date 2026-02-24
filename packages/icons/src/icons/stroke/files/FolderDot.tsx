
import * as React from "react"

export interface FolderDotProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const FolderDot = React.forwardRef<SVGSVGElement, FolderDotProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2"/><circle cx="12" cy="13" r="1"/></g>` }}
      {...props}
    />
  )
)

FolderDot.displayName = "FolderDot"
