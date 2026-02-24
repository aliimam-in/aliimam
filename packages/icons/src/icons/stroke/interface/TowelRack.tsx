
import * as React from "react"

export interface TowelRackProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const TowelRack = React.forwardRef<SVGSVGElement, TowelRackProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M22 7h-2M6.5 3h11A2.5 2.5 0 0 1 20 5.5V20a1 1 0 0 1-1 1h-9a1 1 0 0 1-1-1V5.5a1 1 0 0 0-5 0V17a1 1 0 0 0 1 1h4M9 7H2"/>` }}
      {...props}
    />
  )
)

TowelRack.displayName = "TowelRack"
