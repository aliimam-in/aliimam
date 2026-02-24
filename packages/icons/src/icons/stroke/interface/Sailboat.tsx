
import * as React from "react"

export interface SailboatProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const Sailboat = React.forwardRef<SVGSVGElement, SailboatProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M10 2v15m-3 5a4 4 0 0 1-4-4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1a4 4 0 0 1-4 4zM9.159 2.46a1 1 0 0 1 1.521-.193l9.977 8.98A1 1 0 0 1 20 13H4a1 1 0 0 1-.824-1.567z"/>` }}
      {...props}
    />
  )
)

Sailboat.displayName = "Sailboat"
