
import * as React from "react"

export interface AmpersandsProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const Ampersands = React.forwardRef<SVGSVGElement, AmpersandsProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M10 17c-5-3-7-7-7-9a2 2 0 0 1 4 0c0 2.5-5 2.5-5 6c0 1.7 1.3 3 3 3c2.8 0 5-2.2 5-5m12 5c-5-3-7-7-7-9a2 2 0 0 1 4 0c0 2.5-5 2.5-5 6c0 1.7 1.3 3 3 3c2.8 0 5-2.2 5-5"/>` }}
      {...props}
    />
  )
)

Ampersands.displayName = "Ampersands"
