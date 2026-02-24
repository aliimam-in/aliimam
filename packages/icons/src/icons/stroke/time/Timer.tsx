
import * as React from "react"

export interface TimerProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const Timer = React.forwardRef<SVGSVGElement, TimerProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M10 2h4m-2 12l3-3"/><circle cx="12" cy="14" r="8"/></g>` }}
      {...props}
    />
  )
)

Timer.displayName = "Timer"
