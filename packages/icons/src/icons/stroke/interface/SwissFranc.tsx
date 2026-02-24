
import * as React from "react"

export interface SwissFrancProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const SwissFranc = React.forwardRef<SVGSVGElement, SwissFrancProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M10 21V3h8M6 16h9m-5-6.5h7"/>` }}
      {...props}
    />
  )
)

SwissFranc.displayName = "SwissFranc"
