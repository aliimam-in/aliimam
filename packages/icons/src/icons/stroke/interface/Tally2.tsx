
import * as React from "react"

export interface Tally2Props extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const Tally2 = React.forwardRef<SVGSVGElement, Tally2Props>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M4 4v16M9 4v16"/>` }}
      {...props}
    />
  )
)

Tally2.displayName = "Tally2"
