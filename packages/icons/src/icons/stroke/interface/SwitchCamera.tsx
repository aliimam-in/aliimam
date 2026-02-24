
import * as React from "react"

export interface SwitchCameraProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const SwitchCamera = React.forwardRef<SVGSVGElement, SwitchCameraProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M11 19H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h5m4 0h7a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-5"/><circle cx="12" cy="12" r="3"/><path d="m18 22l-3-3l3-3M6 2l3 3l-3 3"/></g>` }}
      {...props}
    />
  )
)

SwitchCamera.displayName = "SwitchCamera"
