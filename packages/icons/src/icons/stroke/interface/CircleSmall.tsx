
import * as React from "react"

export interface CircleSmallProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const CircleSmall = React.forwardRef<SVGSVGElement, CircleSmallProps>(
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
      dangerouslySetInnerHTML={{ __html: `<circle cx="12" cy="12" r="6" fill="none" stroke="currentColor" stroke-width="2"/>` }}
      {...props}
    />
  )
)

CircleSmall.displayName = "CircleSmall"
