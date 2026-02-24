
import * as React from "react"

export interface CalendarSearchProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const CalendarSearch = React.forwardRef<SVGSVGElement, CalendarSearchProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M16 2v4m5 5.75V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7.25M22 22l-1.875-1.875M3 10h18M8 2v4"/><circle cx="18" cy="18" r="3"/></g>` }}
      {...props}
    />
  )
)

CalendarSearch.displayName = "CalendarSearch"
