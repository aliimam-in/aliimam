
import * as React from "react"

export interface FireExtinguisherProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const FireExtinguisher = React.forwardRef<SVGSVGElement, FireExtinguisherProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M15 6.5V3a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v3.5M9 18h8m1-15h-3"/><path d="M11 3a6 6 0 0 0-6 6v11m0-7h4m8-3a4 4 0 0 0-8 0v10a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2Z"/></g>` }}
      {...props}
    />
  )
)

FireExtinguisher.displayName = "FireExtinguisher"
