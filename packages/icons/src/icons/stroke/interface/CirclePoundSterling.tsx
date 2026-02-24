
import * as React from "react"

export interface CirclePoundSterlingProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const CirclePoundSterling = React.forwardRef<SVGSVGElement, CirclePoundSterlingProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M10 16V9.5a1 1 0 0 1 5 0M8 12h4m-4 4h7"/></g>` }}
      {...props}
    />
  )
)

CirclePoundSterling.displayName = "CirclePoundSterling"
