
import * as React from "react"

export interface BusFrontProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const BusFront = React.forwardRef<SVGSVGElement, BusFrontProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M4 6L2 7m8-1h4m8 1l-2-1"/><rect width="16" height="16" x="4" y="3" rx="2"/><path d="M4 11h16M8 15h.01M16 15h.01M6 19v2m12 0v-2"/></g>` }}
      {...props}
    />
  )
)

BusFront.displayName = "BusFront"
