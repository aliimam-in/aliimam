
import * as React from "react"

export interface CornerDownLeftProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const CornerDownLeft = React.forwardRef<SVGSVGElement, CornerDownLeftProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M20 4v7a4 4 0 0 1-4 4H4"/><path d="m9 10l-5 5l5 5"/></g>` }}
      {...props}
    />
  )
)

CornerDownLeft.displayName = "CornerDownLeft"
