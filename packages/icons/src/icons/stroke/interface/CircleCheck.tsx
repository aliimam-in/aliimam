
import * as React from "react"

export interface CircleCheckProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const CircleCheck = React.forwardRef<SVGSVGElement, CircleCheckProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="m9 12l2 2l4-4"/></g>` }}
      {...props}
    />
  )
)

CircleCheck.displayName = "CircleCheck"
