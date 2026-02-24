
import * as React from "react"

export interface XLineTopProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const XLineTop = React.forwardRef<SVGSVGElement, XLineTopProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M18 4H6m12 4L6 20M6 8l12 12"/>` }}
      {...props}
    />
  )
)

XLineTop.displayName = "XLineTop"
