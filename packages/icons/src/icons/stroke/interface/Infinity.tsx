
import * as React from "react"

export interface InfinityProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const Infinity = React.forwardRef<SVGSVGElement, InfinityProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M6 16c5 0 7-8 12-8a4 4 0 0 1 0 8c-5 0-7-8-12-8a4 4 0 1 0 0 8"/>` }}
      {...props}
    />
  )
)

Infinity.displayName = "Infinity"
