
import * as React from "react"

export interface PoundSterlingProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const PoundSterling = React.forwardRef<SVGSVGElement, PoundSterlingProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M18 7c0-5.333-8-5.333-8 0m0 0v14m-4 0h12M6 13h10"/>` }}
      {...props}
    />
  )
)

PoundSterling.displayName = "PoundSterling"
