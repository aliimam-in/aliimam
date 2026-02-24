
import * as React from "react"

export interface PowerProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const Power = React.forwardRef<SVGSVGElement, PowerProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M12 2v10m6.4-5.4a9 9 0 1 1-12.77.04"/>` }}
      {...props}
    />
  )
)

Power.displayName = "Power"
