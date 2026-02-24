
import * as React from "react"

export interface FileXCornerProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const FileXCorner = React.forwardRef<SVGSVGElement, FileXCornerProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M11 22H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v5"/><path d="M14 2v5a1 1 0 0 0 1 1h5m-5 9l5 5m0-5l-5 5"/></g>` }}
      {...props}
    />
  )
)

FileXCorner.displayName = "FileXCorner"
