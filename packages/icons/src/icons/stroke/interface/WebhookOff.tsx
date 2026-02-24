
import * as React from "react"

export interface WebhookOffProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const WebhookOff = React.forwardRef<SVGSVGElement, WebhookOffProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M17 17h-5c-1.09-.02-1.94.92-2.5 1.9A3 3 0 1 1 2.57 15M9 3.4a4 4 0 0 1 6.52.66"/><path d="m6 17l3.1-5.8a2.5 2.5 0 0 0 .057-2.05M20.3 20.3a4 4 0 0 1-2.3.7m.6-8a4 4 0 0 1 3.357 3.414M12 6l.6 1M2 2l20 20"/></g>` }}
      {...props}
    />
  )
)

WebhookOff.displayName = "WebhookOff"
