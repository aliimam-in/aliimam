
import * as React from "react"

export interface DnaOffProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const DnaOff = React.forwardRef<SVGSVGElement, DnaOffProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M15 2c-1.35 1.5-2.092 3-2.5 4.5L14 8m3-2l-2.891-2.891M2 15c3.333-3 6.667-3 10-3M2 2l20 20M20 9l.891.891M22 9c-1.5 1.35-3 2.092-4.5 2.5l-1-1M3.109 14.109L4 15m2.5-2.5l1 1M7 18l2.891 2.891M9 22c1.35-1.5 2.092-3 2.5-4.5L10 16"/>` }}
      {...props}
    />
  )
)

DnaOff.displayName = "DnaOff"
