
import * as React from "react"

export interface MouseRightProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const MouseRight = React.forwardRef<SVGSVGElement, MouseRightProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M12 7.318V10m7 0v5a7 7 0 0 1-14 0V9c0-3.527 2.608-6.515 6-7"/><circle cx="17" cy="4" r="2"/></g>` }}
      {...props}
    />
  )
)

MouseRight.displayName = "MouseRight"
