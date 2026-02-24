
import * as React from "react"

export interface EuroProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const Euro = React.forwardRef<SVGSVGElement, EuroProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M4 10h12M4 14h9m6-8a7.7 7.7 0 0 0-5.2-2A7.9 7.9 0 0 0 6 12c0 4.4 3.5 8 7.8 8c2 0 3.8-.8 5.2-2"/>` }}
      {...props}
    />
  )
)

Euro.displayName = "Euro"
