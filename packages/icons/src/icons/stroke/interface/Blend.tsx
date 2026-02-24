
import * as React from "react"

export interface BlendProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const Blend = React.forwardRef<SVGSVGElement, BlendProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="9" r="7"/><circle cx="15" cy="15" r="7"/></g>` }}
      {...props}
    />
  )
)

Blend.displayName = "Blend"
