
import * as React from "react"

export interface CircleDollarSignProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const CircleDollarSign = React.forwardRef<SVGSVGElement, CircleDollarSignProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8m4 2V6"/></g>` }}
      {...props}
    />
  )
)

CircleDollarSign.displayName = "CircleDollarSign"
