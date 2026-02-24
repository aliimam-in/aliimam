
import * as React from "react"

export interface MarsStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const MarsStroke = React.forwardRef<SVGSVGElement, MarsStrokeProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="m14 6l4 4m-1-7h4v4m0-4l-7.75 7.75"/><circle cx="9" cy="15" r="6"/></g>` }}
      {...props}
    />
  )
)

MarsStroke.displayName = "MarsStroke"
