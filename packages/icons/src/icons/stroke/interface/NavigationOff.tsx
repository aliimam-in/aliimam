
import * as React from "react"

export interface NavigationOffProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const NavigationOff = React.forwardRef<SVGSVGElement, NavigationOffProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M8.43 8.43L3 11l8 2l2 8l2.57-5.43m1.82-3.84L22 2l-9.73 4.61M2 2l20 20"/>` }}
      {...props}
    />
  )
)

NavigationOff.displayName = "NavigationOff"
