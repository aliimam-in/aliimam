
import * as React from "react"

export interface MenuProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const Menu = React.forwardRef<SVGSVGElement, MenuProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M4 5h16M4 12h16M4 19h16"/>` }}
      {...props}
    />
  )
)

Menu.displayName = "Menu"
