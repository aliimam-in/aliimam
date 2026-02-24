
import * as React from "react"

export interface MailXProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const MailX = React.forwardRef<SVGSVGElement, MailXProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h9"/><path d="m22 7l-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7m15 10l4 4m0-4l-4 4"/></g>` }}
      {...props}
    />
  )
)

MailX.displayName = "MailX"
