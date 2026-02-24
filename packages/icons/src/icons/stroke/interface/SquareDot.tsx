
import * as React from "react"

export interface SquareDotProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const SquareDot = React.forwardRef<SVGSVGElement, SquareDotProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><rect width="18" height="18" x="3" y="3" rx="2"/><circle cx="12" cy="12" r="1"/></g>` }}
      {...props}
    />
  )
)

SquareDot.displayName = "SquareDot"
