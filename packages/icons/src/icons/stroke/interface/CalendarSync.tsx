
import * as React from "react"

export interface CalendarSyncProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const CalendarSync = React.forwardRef<SVGSVGElement, CalendarSyncProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M11 10v4h4"/><path d="m11 14l1.535-1.605a5 5 0 0 1 8 1.5M16 2v4m5 12l-1.535 1.605a5 5 0 0 1-8-1.5"/><path d="M21 22v-4h-4m4-9.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h4.3M3 10h4m1-8v4"/></g>` }}
      {...props}
    />
  )
)

CalendarSync.displayName = "CalendarSync"
