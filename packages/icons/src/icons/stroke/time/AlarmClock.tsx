
import * as React from "react"

export interface AlarmClockProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const AlarmClock = React.forwardRef<SVGSVGElement, AlarmClockProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="13" r="8"/><path d="M12 9v4l2 2M5 3L2 6m20 0l-3-3M6.38 18.7L4 21m13.64-2.33L20 21"/></g>` }}
      {...props}
    />
  )
)

AlarmClock.displayName = "AlarmClock"
