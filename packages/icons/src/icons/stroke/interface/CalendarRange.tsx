
import * as React from "react"

export interface CalendarRangeProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const CalendarRange = React.forwardRef<SVGSVGElement, CalendarRangeProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M16 2v4M3 10h18M8 2v4m9 8h-6m2 4H7m0-4h.01M17 18h.01"/></g>` }}
      {...props}
    />
  )
)

CalendarRange.displayName = "CalendarRange"
