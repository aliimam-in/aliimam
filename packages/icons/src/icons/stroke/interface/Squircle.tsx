
import * as React from "react"

export interface SquircleProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const Squircle = React.forwardRef<SVGSVGElement, SquircleProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M12 3c7.2 0 9 1.8 9 9s-1.8 9-9 9s-9-1.8-9-9s1.8-9 9-9"/>` }}
      {...props}
    />
  )
)

Squircle.displayName = "Squircle"
