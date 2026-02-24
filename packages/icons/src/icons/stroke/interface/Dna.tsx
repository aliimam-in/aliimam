
import * as React from "react"

export interface DnaProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const Dna = React.forwardRef<SVGSVGElement, DnaProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="m10 16l1.5 1.5M14 8l-1.5-1.5M15 2c-1.798 1.998-2.518 3.995-2.807 5.993M16.5 10.5l1 1M17 6l-2.891-2.891M2 15c6.667-6 13.333 0 20-6m-2 0l.891.891M3.109 14.109L4 15m2.5-2.5l1 1M7 18l2.891 2.891M9 22c1.798-1.998 2.518-3.995 2.807-5.993"/>` }}
      {...props}
    />
  )
)

Dna.displayName = "Dna"
