
import * as React from "react"

export interface CalendarCogProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const CalendarCog = React.forwardRef<SVGSVGElement, CalendarCogProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="m15.228 16.852l-.923-.383m.923 2.679l-.923.383M16 2v4m.47 8.305l.382.923m0 5.544l-.383.924m2.679-6.468l.383-.923m-.001 7.391l-.382-.924m1.624-3.92l.924-.383m-.924 2.679l.924.383M21 10.592V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6M3 10h18M8 2v4"/><circle cx="18" cy="18" r="3"/></g>` }}
      {...props}
    />
  )
)

CalendarCog.displayName = "CalendarCog"
