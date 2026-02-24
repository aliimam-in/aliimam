
import * as React from "react"

export interface ScalingProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const Scaling = React.forwardRef<SVGSVGElement, ScalingProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M14 15H9v-5m7-7h5v5m0-5L9 15"/></g>` }}
      {...props}
    />
  )
)

Scaling.displayName = "Scaling"
