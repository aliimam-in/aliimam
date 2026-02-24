
import * as React from "react"

export interface SnailProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const Snail = React.forwardRef<SVGSVGElement, SnailProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M2 13a6 6 0 1 0 12 0a4 4 0 1 0-8 0a2 2 0 0 0 4 0"/><circle cx="10" cy="13" r="8"/><path d="M2 21h12c4.4 0 8-3.6 8-8V7a2 2 0 1 0-4 0v6m0-10l1.1 2.2M22 3l-1.1 2.2"/></g>` }}
      {...props}
    />
  )
)

Snail.displayName = "Snail"
