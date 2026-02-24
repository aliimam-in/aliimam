
import * as React from "react"

export interface LollipopProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const Lollipop = React.forwardRef<SVGSVGElement, LollipopProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="m21 21l-4.3-4.3M11 11a2 2 0 0 0 4 0a4 4 0 0 0-8 0a6 6 0 0 0 12 0"/></g>` }}
      {...props}
    />
  )
)

Lollipop.displayName = "Lollipop"
