
import * as React from "react"

export interface ClockAlertProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const ClockAlert = React.forwardRef<SVGSVGElement, ClockAlertProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M12 6v6l4 2m4-2v5m0 4h.01"/><path d="M21.25 8.2A10 10 0 1 0 16 21.16"/></g>` }}
      {...props}
    />
  )
)

ClockAlert.displayName = "ClockAlert"
