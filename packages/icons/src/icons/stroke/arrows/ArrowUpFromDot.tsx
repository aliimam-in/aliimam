
import * as React from "react"

export interface ArrowUpFromDotProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const ArrowUpFromDot = React.forwardRef<SVGSVGElement, ArrowUpFromDotProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="m5 9l7-7l7 7m-7 7V2"/><circle cx="12" cy="21" r="1"/></g>` }}
      {...props}
    />
  )
)

ArrowUpFromDot.displayName = "ArrowUpFromDot"
