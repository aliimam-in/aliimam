
import * as React from "react"

export interface HamburgerProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const Hamburger = React.forwardRef<SVGSVGElement, HamburgerProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M12 16H4a2 2 0 1 1 0-4h16a2 2 0 1 1 0 4h-4.25M5 12a2 2 0 0 1-2-2a9 7 0 0 1 18 0a2 2 0 0 1-2 2M5 16a2 2 0 0 0-2 2a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3a2 2 0 0 0-2-2q0 0 0 0"/><path d="m6.67 12l6.13 4.6a2 2 0 0 0 2.8-.4l3.15-4.2"/></g>` }}
      {...props}
    />
  )
)

Hamburger.displayName = "Hamburger"
