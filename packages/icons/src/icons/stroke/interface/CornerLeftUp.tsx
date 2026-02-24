
import * as React from "react"

export interface CornerLeftUpProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const CornerLeftUp = React.forwardRef<SVGSVGElement, CornerLeftUpProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M14 9L9 4L4 9"/><path d="M20 20h-7a4 4 0 0 1-4-4V4"/></g>` }}
      {...props}
    />
  )
)

CornerLeftUp.displayName = "CornerLeftUp"
