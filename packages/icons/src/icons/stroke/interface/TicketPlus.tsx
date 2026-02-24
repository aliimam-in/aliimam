
import * as React from "react"

export interface TicketPlusProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const TicketPlus = React.forwardRef<SVGSVGElement, TicketPlusProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Zm7 3h6m-3-3v6"/>` }}
      {...props}
    />
  )
)

TicketPlus.displayName = "TicketPlus"
