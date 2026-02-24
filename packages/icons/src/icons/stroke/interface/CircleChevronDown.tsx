
import * as React from "react"

export interface CircleChevronDownProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const CircleChevronDown = React.forwardRef<SVGSVGElement, CircleChevronDownProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="m16 10l-4 4l-4-4"/></g>` }}
      {...props}
    />
  )
)

CircleChevronDown.displayName = "CircleChevronDown"
