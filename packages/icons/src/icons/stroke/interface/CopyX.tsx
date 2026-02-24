
import * as React from "react"

export interface CopyXProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const CopyX = React.forwardRef<SVGSVGElement, CopyXProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="m12 12l6 6m-6 0l6-6"/><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></g>` }}
      {...props}
    />
  )
)

CopyX.displayName = "CopyX"
