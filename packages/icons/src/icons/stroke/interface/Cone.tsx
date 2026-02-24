
import * as React from "react"

export interface ConeProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const Cone = React.forwardRef<SVGSVGElement, ConeProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="m20.9 18.55l-8-15.98a1 1 0 0 0-1.8 0l-8 15.98"/><ellipse cx="12" cy="19" rx="9" ry="3"/></g>` }}
      {...props}
    />
  )
)

Cone.displayName = "Cone"
