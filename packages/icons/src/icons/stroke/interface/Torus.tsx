
import * as React from "react"

export interface TorusProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const Torus = React.forwardRef<SVGSVGElement, TorusProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><ellipse cx="12" cy="11" rx="3" ry="2"/><ellipse cx="12" cy="12.5" rx="10" ry="8.5"/></g>` }}
      {...props}
    />
  )
)

Torus.displayName = "Torus"
