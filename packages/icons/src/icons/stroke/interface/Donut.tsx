
import * as React from "react"

export interface DonutProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const Donut = React.forwardRef<SVGSVGElement, DonutProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M20.5 10a2.5 2.5 0 0 1-2.4-3H18a2.95 2.95 0 0 1-2.6-4.4a10 10 0 1 0 6.3 7.1c-.3.2-.8.3-1.2.3"/><circle cx="12" cy="12" r="3"/></g>` }}
      {...props}
    />
  )
)

Donut.displayName = "Donut"
