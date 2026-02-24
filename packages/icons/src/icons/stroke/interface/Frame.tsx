
import * as React from "react"

export interface FrameProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const Frame = React.forwardRef<SVGSVGElement, FrameProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M22 6H2m20 12H2M6 2v20M18 2v20"/>` }}
      {...props}
    />
  )
)

Frame.displayName = "Frame"
