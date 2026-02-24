
import * as React from "react"

export interface StepBackProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const StepBack = React.forwardRef<SVGSVGElement, StepBackProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M13.971 4.285A2 2 0 0 1 17 6v12a2 2 0 0 1-3.029 1.715l-9.997-5.998a2 2 0 0 1-.003-3.432zM21 20V4"/>` }}
      {...props}
    />
  )
)

StepBack.displayName = "StepBack"
