
import * as React from "react"

export interface BeakerProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const Beaker = React.forwardRef<SVGSVGElement, BeakerProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M4.5 3h15M6 3v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V3M6 14h12"/>` }}
      {...props}
    />
  )
)

Beaker.displayName = "Beaker"
