
import * as React from "react"

export interface CalendarArrowDownProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const CalendarArrowDown = React.forwardRef<SVGSVGElement, CalendarArrowDownProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="m14 18l4 4l4-4M16 2v4m2 8v8"/><path d="M21 11.354V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7.343M3 10h18M8 2v4"/></g>` }}
      {...props}
    />
  )
)

CalendarArrowDown.displayName = "CalendarArrowDown"
