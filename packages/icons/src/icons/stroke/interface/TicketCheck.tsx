
import * as React from "react"

export interface TicketCheckProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const TicketCheck = React.forwardRef<SVGSVGElement, TicketCheckProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"/><path d="m9 12l2 2l4-4"/></g>` }}
      {...props}
    />
  )
)

TicketCheck.displayName = "TicketCheck"
