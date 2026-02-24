
import * as React from "react"

export interface BedProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const Bed = React.forwardRef<SVGSVGElement, BedProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M2 4v16M2 8h18a2 2 0 0 1 2 2v10M2 17h20M6 8v9"/>` }}
      {...props}
    />
  )
)

Bed.displayName = "Bed"
