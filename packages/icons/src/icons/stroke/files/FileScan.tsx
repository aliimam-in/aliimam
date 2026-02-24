
import * as React from "react"

export interface FileScanProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const FileScan = React.forwardRef<SVGSVGElement, FileScanProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M20 10V8a2.4 2.4 0 0 0-.706-1.704l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h4.35"/><path d="M14 2v5a1 1 0 0 0 1 1h5m-4 6a2 2 0 0 0-2 2m2 6a2 2 0 0 1-2-2m6-6a2 2 0 0 1 2 2m-2 6a2 2 0 0 0 2-2"/></g>` }}
      {...props}
    />
  )
)

FileScan.displayName = "FileScan"
