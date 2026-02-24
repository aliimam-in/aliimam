
import * as React from "react"

export interface AlarmClockPlusProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const AlarmClockPlus = React.forwardRef<SVGSVGElement, AlarmClockPlusProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="13" r="8"/><path d="M5 3L2 6m20 0l-3-3M6.38 18.7L4 21m13.64-2.33L20 21m-8-11v6m-3-3h6"/></g>` }}
      {...props}
    />
  )
)

AlarmClockPlus.displayName = "AlarmClockPlus"
