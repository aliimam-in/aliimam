
import * as React from "react"

export interface CalendarClockProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const CalendarClock = React.forwardRef<SVGSVGElement, CalendarClockProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M16 14v2.2l1.6 1M16 2v4m5 1.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5M3 10h5m0-8v4"/><circle cx="16" cy="16" r="6"/></g>` }}
      {...props}
    />
  )
)

CalendarClock.displayName = "CalendarClock"
