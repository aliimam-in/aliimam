
import * as React from "react"

export interface BellPlusProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const BellPlus = React.forwardRef<SVGSVGElement, BellPlusProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M10.268 21a2 2 0 0 0 3.464 0M15 8h6m-3-3v6m2.002 3.464a9 9 0 0 0 .738.863A1 1 0 0 1 20 17H4a1 1 0 0 1-.74-1.673C4.59 13.956 6 12.499 6 8a6 6 0 0 1 8.75-5.332"/>` }}
      {...props}
    />
  )
)

BellPlus.displayName = "BellPlus"
