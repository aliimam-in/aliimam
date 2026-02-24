
import * as React from "react"

export interface DollarSignProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const DollarSign = React.forwardRef<SVGSVGElement, DollarSignProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M12 2v20m5-17H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>` }}
      {...props}
    />
  )
)

DollarSign.displayName = "DollarSign"
