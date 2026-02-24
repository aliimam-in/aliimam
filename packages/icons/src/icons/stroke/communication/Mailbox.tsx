
import * as React from "react"

export interface MailboxProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const Mailbox = React.forwardRef<SVGSVGElement, MailboxProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M22 17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9.5C2 7 4 5 6.5 5H18c2.2 0 4 1.8 4 4z"/><path d="M15 9h3v2M6.5 5C9 5 11 7 11 9.5V17a2 2 0 0 1-2 2m-3-9h1"/></g>` }}
      {...props}
    />
  )
)

Mailbox.displayName = "Mailbox"
