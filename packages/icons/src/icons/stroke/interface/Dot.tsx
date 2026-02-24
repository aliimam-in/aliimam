
import * as React from "react"

export interface DotProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const Dot = React.forwardRef<SVGSVGElement, DotProps>(
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
      dangerouslySetInnerHTML={{ __html: `<circle cx="12.1" cy="12.1" r="1" fill="none" stroke="currentColor" stroke-width="2"/>` }}
      {...props}
    />
  )
)

Dot.displayName = "Dot"
