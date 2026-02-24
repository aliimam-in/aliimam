
import * as React from "react"

export interface RouteOffProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const RouteOff = React.forwardRef<SVGSVGElement, RouteOffProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><circle cx="6" cy="19" r="3"/><path d="M9 19h8.5c.4 0 .9-.1 1.3-.2M5.2 5.2A3.5 3.53 0 0 0 6.5 12H12M2 2l20 20m-1-6.7a3.5 3.5 0 0 0-3.3-3.3M15 5h-4.3"/><circle cx="18" cy="5" r="3"/></g>` }}
      {...props}
    />
  )
)

RouteOff.displayName = "RouteOff"
