
import * as React from "react"

export interface Tally5Props extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const Tally5 = React.forwardRef<SVGSVGElement, Tally5Props>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M4 4v16M9 4v16m5-16v16m5-16v16m3-14L2 18"/>` }}
      {...props}
    />
  )
)

Tally5.displayName = "Tally5"
