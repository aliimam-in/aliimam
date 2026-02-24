
import * as React from "react"

export interface FileCodeCornerProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const FileCodeCorner = React.forwardRef<SVGSVGElement, FileCodeCornerProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M4 12.15V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2h-3.35"/><path d="M14 2v5a1 1 0 0 0 1 1h5M5 16l-3 3l3 3m4 0l3-3l-3-3"/></g>` }}
      {...props}
    />
  )
)

FileCodeCorner.displayName = "FileCodeCorner"
