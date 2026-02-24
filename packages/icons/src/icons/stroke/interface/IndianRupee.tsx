
import * as React from "react"

export interface IndianRupeeProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const IndianRupee = React.forwardRef<SVGSVGElement, IndianRupeeProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M6 3h12M6 8h12M6 13l8.5 8M6 13h3m0 0c6.667 0 6.667-10 0-10"/>` }}
      {...props}
    />
  )
)

IndianRupee.displayName = "IndianRupee"
