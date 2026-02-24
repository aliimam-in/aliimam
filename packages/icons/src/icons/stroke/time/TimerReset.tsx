
import * as React from "react"

export interface TimerResetProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const TimerReset = React.forwardRef<SVGSVGElement, TimerResetProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M10 2h4m-2 12v-4m-8 3a8 8 0 0 1 8-7a8 8 0 1 1-5.3 14L4 17.6"/><path d="M9 17H4v5"/></g>` }}
      {...props}
    />
  )
)

TimerReset.displayName = "TimerReset"
