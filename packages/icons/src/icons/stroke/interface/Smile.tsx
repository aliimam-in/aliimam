
import * as React from "react"

export interface SmileProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const Smile = React.forwardRef<SVGSVGElement, SmileProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2s4-2 4-2M9 9h.01M15 9h.01"/></g>` }}
      {...props}
    />
  )
)

Smile.displayName = "Smile"
