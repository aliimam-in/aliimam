
import * as React from "react"

export interface BoomBoxProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const BoomBox = React.forwardRef<SVGSVGElement, BoomBoxProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M4 9V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4M8 8v1m4-1v1m4-1v1"/><rect width="20" height="12" x="2" y="9" rx="2"/><circle cx="8" cy="15" r="2"/><circle cx="16" cy="15" r="2"/></g>` }}
      {...props}
    />
  )
)

BoomBox.displayName = "BoomBox"
