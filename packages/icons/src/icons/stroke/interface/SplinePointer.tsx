
import * as React from "react"

export interface SplinePointerProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const SplinePointer = React.forwardRef<SVGSVGElement, SplinePointerProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M12.034 12.681a.498.498 0 0 1 .647-.647l9 3.5a.5.5 0 0 1-.033.943l-3.444 1.068a1 1 0 0 0-.66.66l-1.067 3.443a.5.5 0 0 1-.943.033zM5 17A12 12 0 0 1 17 5"/><circle cx="19" cy="5" r="2"/><circle cx="5" cy="19" r="2"/></g>` }}
      {...props}
    />
  )
)

SplinePointer.displayName = "SplinePointer"
