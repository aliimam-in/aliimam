
import * as React from "react"

export interface CalendarFoldProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const CalendarFold = React.forwardRef<SVGSVGElement, CalendarFoldProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M3 20a2 2 0 0 0 2 2h10a2.4 2.4 0 0 0 1.706-.706l3.588-3.588A2.4 2.4 0 0 0 21 16V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2z"/><path d="M15 22v-5a1 1 0 0 1 1-1h5M8 2v4m8-4v4M3 10h18"/></g>` }}
      {...props}
    />
  )
)

CalendarFold.displayName = "CalendarFold"
