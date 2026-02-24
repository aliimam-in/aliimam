
import * as React from "react"

export interface ZoomInProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const ZoomIn = React.forwardRef<SVGSVGElement, ZoomInProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="m21 21l-4.35-4.35M11 8v6m-3-3h6"/></g>` }}
      {...props}
    />
  )
)

ZoomIn.displayName = "ZoomIn"
