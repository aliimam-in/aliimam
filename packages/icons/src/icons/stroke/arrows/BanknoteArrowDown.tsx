
import * as React from "react"

export interface BanknoteArrowDownProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const BanknoteArrowDown = React.forwardRef<SVGSVGElement, BanknoteArrowDownProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M12 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5m-6 6l3 3l3-3m-4-7h.01m.99 4v6M6 12h.01"/><circle cx="12" cy="12" r="2"/></g>` }}
      {...props}
    />
  )
)

BanknoteArrowDown.displayName = "BanknoteArrowDown"
