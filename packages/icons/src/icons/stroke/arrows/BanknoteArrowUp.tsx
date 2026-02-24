
import * as React from "react"

export interface BanknoteArrowUpProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const BanknoteArrowUp = React.forwardRef<SVGSVGElement, BanknoteArrowUpProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M12 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5m-4-1h.01M19 22v-6m3 3l-3-3l-3 3M6 12h.01"/><circle cx="12" cy="12" r="2"/></g>` }}
      {...props}
    />
  )
)

BanknoteArrowUp.displayName = "BanknoteArrowUp"
