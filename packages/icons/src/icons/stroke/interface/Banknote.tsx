
import * as React from "react"

export interface BanknoteProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const Banknote = React.forwardRef<SVGSVGElement, BanknoteProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><rect width="20" height="12" x="2" y="6" rx="2"/><circle cx="12" cy="12" r="2"/><path d="M6 12h.01M18 12h.01"/></g>` }}
      {...props}
    />
  )
)

Banknote.displayName = "Banknote"
