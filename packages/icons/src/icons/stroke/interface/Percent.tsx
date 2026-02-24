
import * as React from "react"

export interface PercentProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const Percent = React.forwardRef<SVGSVGElement, PercentProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M19 5L5 19"/><circle cx="6.5" cy="6.5" r="2.5"/><circle cx="17.5" cy="17.5" r="2.5"/></g>` }}
      {...props}
    />
  )
)

Percent.displayName = "Percent"
