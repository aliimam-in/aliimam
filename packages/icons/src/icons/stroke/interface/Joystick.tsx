
import * as React from "react"

export interface JoystickProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const Joystick = React.forwardRef<SVGSVGElement, JoystickProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M21 17a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2zM6 15v-2m6 2V9"/><circle cx="12" cy="6" r="3"/></g>` }}
      {...props}
    />
  )
)

Joystick.displayName = "Joystick"
