
import * as React from "react"

export interface ArrowUp01Props extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const ArrowUp01 = React.forwardRef<SVGSVGElement, ArrowUp01Props>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="m3 8l4-4l4 4M7 4v16"/><rect width="4" height="6" x="15" y="4" ry="2"/><path d="M17 20v-6h-2m0 6h4"/></g>` }}
      {...props}
    />
  )
)

ArrowUp01.displayName = "ArrowUp01"
