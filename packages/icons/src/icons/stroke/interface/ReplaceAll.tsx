
import * as React from "react"

export interface ReplaceAllProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const ReplaceAll = React.forwardRef<SVGSVGElement, ReplaceAllProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M14 14a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1m0-17a1 1 0 0 1 1-1m0 7a1 1 0 0 1-1-1m5 5a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1m2-17a1 1 0 0 0-1-1m1 6a1 1 0 0 1-1 1M3 7l3 3l3-3"/><path d="M6 10V5a2 2 0 0 1 2-2h2"/><rect width="7" height="7" x="3" y="14" rx="1"/></g>` }}
      {...props}
    />
  )
)

ReplaceAll.displayName = "ReplaceAll"
