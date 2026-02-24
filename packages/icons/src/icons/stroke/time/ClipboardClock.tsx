
import * as React from "react"

export interface ClipboardClockProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const ClipboardClock = React.forwardRef<SVGSVGElement, ClipboardClockProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M16 14v2.2l1.6 1M16 4h2a2 2 0 0 1 2 2v.832M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h2"/><circle cx="16" cy="16" r="6"/><rect width="8" height="4" x="8" y="2" rx="1"/></g>` }}
      {...props}
    />
  )
)

ClipboardClock.displayName = "ClipboardClock"
