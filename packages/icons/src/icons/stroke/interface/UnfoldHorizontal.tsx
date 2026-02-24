
import * as React from "react"

export interface UnfoldHorizontalProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const UnfoldHorizontal = React.forwardRef<SVGSVGElement, UnfoldHorizontalProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M16 12h6M8 12H2M12 2v2m0 4v2m0 4v2m0 4v2m7-7l3-3l-3-3M5 9l-3 3l3 3"/>` }}
      {...props}
    />
  )
)

UnfoldHorizontal.displayName = "UnfoldHorizontal"
