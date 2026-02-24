
import * as React from "react"

export interface Move3dProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const Move3d = React.forwardRef<SVGSVGElement, Move3dProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M5 3v16h16M5 19l6-6"/><path d="m2 6l3-3l3 3m10 10l3 3l-3 3"/></g>` }}
      {...props}
    />
  )
)

Move3d.displayName = "Move3d"
