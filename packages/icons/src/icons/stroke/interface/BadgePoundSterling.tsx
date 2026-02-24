
import * as React from "react"

export interface BadgePoundSterlingProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const BadgePoundSterling = React.forwardRef<SVGSVGElement, BadgePoundSterlingProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77a4 4 0 0 1 6.74 0a4 4 0 0 1 4.78 4.78a4 4 0 0 1 0 6.74a4 4 0 0 1-4.77 4.78a4 4 0 0 1-6.75 0a4 4 0 0 1-4.78-4.77a4 4 0 0 1 0-6.76M8 12h4"/><path d="M10 16V9.5a2.5 2.5 0 0 1 5 0M8 16h7"/></g>` }}
      {...props}
    />
  )
)

BadgePoundSterling.displayName = "BadgePoundSterling"
