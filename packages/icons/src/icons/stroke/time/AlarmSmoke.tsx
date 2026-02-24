
import * as React from "react"

export interface AlarmSmokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const AlarmSmoke = React.forwardRef<SVGSVGElement, AlarmSmokeProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M11 21c0-2.5 2-2.5 2-5m3 5c0-2.5 2-2.5 2-5m1-8l-.8 3a1.25 1.25 0 0 1-1.2 1H7a1.25 1.25 0 0 1-1.2-1L5 8m16-5a1 1 0 0 1 1 1v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a1 1 0 0 1 1-1zM6 21c0-2.5 2-2.5 2-5"/>` }}
      {...props}
    />
  )
)

AlarmSmoke.displayName = "AlarmSmoke"
