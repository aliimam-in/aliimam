
import * as React from "react"

export interface CurrencyProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const Currency = React.forwardRef<SVGSVGElement, CurrencyProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="8"/><path d="m3 3l3 3m15-3l-3 3M3 21l3-3m15 3l-3-3"/></g>` }}
      {...props}
    />
  )
)

Currency.displayName = "Currency"
