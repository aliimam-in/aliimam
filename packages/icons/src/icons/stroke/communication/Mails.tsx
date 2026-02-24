
import * as React from "react"

export interface MailsProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const Mails = React.forwardRef<SVGSVGElement, MailsProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M17 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 1-1.732M22 5.5l-6.419 4.179a2 2 0 0 1-2.162 0L7 5.5"/><rect width="15" height="12" x="7" y="3" rx="2"/></g>` }}
      {...props}
    />
  )
)

Mails.displayName = "Mails"
