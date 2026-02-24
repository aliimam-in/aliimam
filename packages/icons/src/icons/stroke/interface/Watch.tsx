
import * as React from "react"

export interface WatchProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const Watch = React.forwardRef<SVGSVGElement, WatchProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M12 10v2.2l1.6 1m2.53-5.54l-.81-4.05a2 2 0 0 0-2-1.61h-2.68a2 2 0 0 0-2 1.61l-.78 4.05m.02 8.7l.8 4a2 2 0 0 0 2 1.61h2.72a2 2 0 0 0 2-1.61l.81-4.05"/><circle cx="12" cy="12" r="6"/></g>` }}
      {...props}
    />
  )
)

Watch.displayName = "Watch"
