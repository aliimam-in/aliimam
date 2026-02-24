
import * as React from "react"

export interface ArrowUpZAProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const ArrowUpZA = React.forwardRef<SVGSVGElement, ArrowUpZAProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="m3 8l4-4l4 4M7 4v16m8-16h5l-5 6h5m-5 10v-3.5a2.5 2.5 0 0 1 5 0V20m0-2h-5"/>` }}
      {...props}
    />
  )
)

ArrowUpZA.displayName = "ArrowUpZA"
