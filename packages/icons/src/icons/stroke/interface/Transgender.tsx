
import * as React from "react"

export interface TransgenderProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const Transgender = React.forwardRef<SVGSVGElement, TransgenderProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M12 16v6m2-2h-4m8-18h4v4M2 2l7.17 7.17M2 5.355V2h3.357M22 2l-7.17 7.17M8 5L5 8"/><circle cx="12" cy="12" r="4"/></g>` }}
      {...props}
    />
  )
)

Transgender.displayName = "Transgender"
