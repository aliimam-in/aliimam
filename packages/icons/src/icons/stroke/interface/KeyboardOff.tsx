
import * as React from "react"

export interface KeyboardOffProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const KeyboardOff = React.forwardRef<SVGSVGElement, KeyboardOffProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M20 4a2 2 0 0 1 2 2m0 0v10.41M7 16h9M9.69 4H20m-6 4h.01M18 8h.01M2 2l20 20m-2-2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2m2 4h.01M8 12h.01"/>` }}
      {...props}
    />
  )
)

KeyboardOff.displayName = "KeyboardOff"
