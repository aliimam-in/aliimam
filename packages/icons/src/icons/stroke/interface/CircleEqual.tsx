
import * as React from "react"

export interface CircleEqualProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const CircleEqual = React.forwardRef<SVGSVGElement, CircleEqualProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M7 10h10M7 14h10"/></g>` }}
      {...props}
    />
  )
)

CircleEqual.displayName = "CircleEqual"
