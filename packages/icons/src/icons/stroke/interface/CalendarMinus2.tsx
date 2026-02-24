
import * as React from "react"

export interface CalendarMinus2Props extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const CalendarMinus2 = React.forwardRef<SVGSVGElement, CalendarMinus2Props>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M8 2v4m8-4v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18m-11 6h4"/></g>` }}
      {...props}
    />
  )
)

CalendarMinus2.displayName = "CalendarMinus2"
