
import * as React from "react"

export interface BedSingleProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const BedSingle = React.forwardRef<SVGSVGElement, BedSingleProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M3 20v-8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v8M5 10V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4M3 18h18"/>` }}
      {...props}
    />
  )
)

BedSingle.displayName = "BedSingle"
