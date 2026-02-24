
import * as React from "react"

export interface TabletsProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const Tablets = React.forwardRef<SVGSVGElement, TabletsProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><circle cx="7" cy="7" r="5"/><circle cx="17" cy="17" r="5"/><path d="M12 17h10M3.46 10.54l7.08-7.08"/></g>` }}
      {...props}
    />
  )
)

Tablets.displayName = "Tablets"
