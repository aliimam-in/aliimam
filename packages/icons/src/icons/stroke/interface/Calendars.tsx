
import * as React from "react"

export interface CalendarsProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const Calendars = React.forwardRef<SVGSVGElement, CalendarsProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v2m3.726 17.01A2 2 0 0 1 14 22H4a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2m14-6v2M2 13h2m4-5h14"/><rect width="14" height="14" x="8" y="3" rx="2"/></g>` }}
      {...props}
    />
  )
)

Calendars.displayName = "Calendars"
