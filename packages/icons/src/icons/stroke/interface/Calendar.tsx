
import * as React from "react"

export interface CalendarProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const Calendar = React.forwardRef<SVGSVGElement, CalendarProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M8 2v4m8-4v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/></g>` }}
      {...props}
    />
  )
)

Calendar.displayName = "Calendar"
