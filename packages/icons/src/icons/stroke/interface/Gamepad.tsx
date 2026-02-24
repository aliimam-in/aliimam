
import * as React from "react"

export interface GamepadProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const Gamepad = React.forwardRef<SVGSVGElement, GamepadProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M6 12h4m-2-2v4m7-1h.01M18 11h.01"/><rect width="20" height="12" x="2" y="6" rx="2"/></g>` }}
      {...props}
    />
  )
)

Gamepad.displayName = "Gamepad"
