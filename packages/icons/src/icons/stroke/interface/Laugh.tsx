
import * as React from "react"

export interface LaughProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const Laugh = React.forwardRef<SVGSVGElement, LaughProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M18 13a6 6 0 0 1-6 5a6 6 0 0 1-6-5zM9 9h.01M15 9h.01"/></g>` }}
      {...props}
    />
  )
)

Laugh.displayName = "Laugh"
