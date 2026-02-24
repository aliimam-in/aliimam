
import * as React from "react"

export interface MotorbikeProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const Motorbike = React.forwardRef<SVGSVGElement, MotorbikeProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="m18 14l-1-3M3 9l6 2a2 2 0 0 1 2-2h2a2 2 0 0 1 1.99 1.81"/><path d="M8 17h3a1 1 0 0 0 1-1a6 6 0 0 1 6-6a1 1 0 0 0 1-1v-.75A5 5 0 0 0 17 5"/><circle cx="19" cy="17" r="3"/><circle cx="5" cy="17" r="3"/></g>` }}
      {...props}
    />
  )
)

Motorbike.displayName = "Motorbike"
