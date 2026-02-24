
import * as React from "react"

export interface CalendarMinusProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const CalendarMinus = React.forwardRef<SVGSVGElement, CalendarMinusProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M16 19h6M16 2v4m5 9V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8.5M3 10h18M8 2v4"/>` }}
      {...props}
    />
  )
)

CalendarMinus.displayName = "CalendarMinus"
