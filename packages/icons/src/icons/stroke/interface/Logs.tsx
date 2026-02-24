
import * as React from "react"

export interface LogsProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const Logs = React.forwardRef<SVGSVGElement, LogsProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M3 5h1m-1 7h1m-1 7h1M8 5h1m-1 7h1m-1 7h1m4-14h8m-8 7h8m-8 7h8"/>` }}
      {...props}
    />
  )
)

Logs.displayName = "Logs"
