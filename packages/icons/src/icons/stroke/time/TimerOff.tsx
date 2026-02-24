
import * as React from "react"

export interface TimerOffProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const TimerOff = React.forwardRef<SVGSVGElement, TimerOffProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M10 2h4m-9.4 9a8 8 0 0 0 1.7 8.7a8 8 0 0 0 8.7 1.7m-7.6-14a8 8 0 0 1 10.3 1a8 8 0 0 1 .9 10.2M2 2l20 20M12 12v-2"/>` }}
      {...props}
    />
  )
)

TimerOff.displayName = "TimerOff"
