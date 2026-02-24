
import * as React from "react"

export interface TramFrontProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const TramFront = React.forwardRef<SVGSVGElement, TramFrontProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><rect width="16" height="16" x="4" y="3" rx="2"/><path d="M4 11h16m-8-8v8m-4 8l-2 3m12 0l-2-3m-8-4h.01M16 15h.01"/></g>` }}
      {...props}
    />
  )
)

TramFront.displayName = "TramFront"
