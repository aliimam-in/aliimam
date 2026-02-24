
import * as React from "react"

export interface MonitorSpeakerProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const MonitorSpeaker = React.forwardRef<SVGSVGElement, MonitorSpeakerProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M5.5 20H8m9-11h.01"/><rect width="10" height="16" x="12" y="4" rx="2"/><path d="M8 6H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h4"/><circle cx="17" cy="15" r="1"/></g>` }}
      {...props}
    />
  )
)

MonitorSpeaker.displayName = "MonitorSpeaker"
