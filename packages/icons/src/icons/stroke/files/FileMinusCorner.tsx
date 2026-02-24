
import * as React from "react"

export interface FileMinusCornerProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const FileMinusCorner = React.forwardRef<SVGSVGElement, FileMinusCornerProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M20 14V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12"/><path d="M14 2v5a1 1 0 0 0 1 1h5m-6 10h6"/></g>` }}
      {...props}
    />
  )
)

FileMinusCorner.displayName = "FileMinusCorner"
