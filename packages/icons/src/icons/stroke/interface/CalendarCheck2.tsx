
import * as React from "react"

export interface CalendarCheck2Props extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const CalendarCheck2 = React.forwardRef<SVGSVGElement, CalendarCheck2Props>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M8 2v4m8-4v4m5 8V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8M3 10h18m-5 10l2 2l4-4"/>` }}
      {...props}
    />
  )
)

CalendarCheck2.displayName = "CalendarCheck2"
