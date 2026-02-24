
import * as React from "react"

export interface AlarmClockOffProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const AlarmClockOff = React.forwardRef<SVGSVGElement, AlarmClockOffProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M6.87 6.87a8 8 0 1 0 11.26 11.26m1.77-3.88a8 8 0 0 0-9.15-9.15M22 6l-3-3M6.26 18.67L4 21M2 2l20 20M4 4L2 6"/>` }}
      {...props}
    />
  )
)

AlarmClockOff.displayName = "AlarmClockOff"
