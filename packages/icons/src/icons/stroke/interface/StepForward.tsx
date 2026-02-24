
import * as React from "react"

export interface StepForwardProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const StepForward = React.forwardRef<SVGSVGElement, StepForwardProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M10.029 4.285A2 2 0 0 0 7 6v12a2 2 0 0 0 3.029 1.715l9.997-5.998a2 2 0 0 0 .003-3.432zM3 4v16"/>` }}
      {...props}
    />
  )
)

StepForward.displayName = "StepForward"
