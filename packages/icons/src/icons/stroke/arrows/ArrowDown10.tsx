
import * as React from "react"

export interface ArrowDown10Props extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const ArrowDown10 = React.forwardRef<SVGSVGElement, ArrowDown10Props>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="m3 16l4 4l4-4m-4 4V4m10 6V4h-2m0 6h4"/><rect width="4" height="6" x="15" y="14" ry="2"/></g>` }}
      {...props}
    />
  )
)

ArrowDown10.displayName = "ArrowDown10"
