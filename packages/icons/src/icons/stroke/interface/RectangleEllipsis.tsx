
import * as React from "react"

export interface RectangleEllipsisProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const RectangleEllipsis = React.forwardRef<SVGSVGElement, RectangleEllipsisProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><rect width="20" height="12" x="2" y="6" rx="2"/><path d="M12 12h.01M17 12h.01M7 12h.01"/></g>` }}
      {...props}
    />
  )
)

RectangleEllipsis.displayName = "RectangleEllipsis"
