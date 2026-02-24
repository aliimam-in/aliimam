
import * as React from "react"

export interface CircleQuestionMarkProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const CircleQuestionMark = React.forwardRef<SVGSVGElement, CircleQuestionMarkProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3m.08 4h.01"/></g>` }}
      {...props}
    />
  )
)

CircleQuestionMark.displayName = "CircleQuestionMark"
