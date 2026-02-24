
import * as React from "react"

export interface ArrowUpWideNarrowProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const ArrowUpWideNarrow = React.forwardRef<SVGSVGElement, ArrowUpWideNarrowProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="m3 8l4-4l4 4M7 4v16m4-8h10m-10 4h7m-7 4h4"/>` }}
      {...props}
    />
  )
)

ArrowUpWideNarrow.displayName = "ArrowUpWideNarrow"
