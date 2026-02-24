
import * as React from "react"

export interface WebcamProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const Webcam = React.forwardRef<SVGSVGElement, WebcamProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="10" r="8"/><circle cx="12" cy="10" r="3"/><path d="M7 22h10m-5 0v-4"/></g>` }}
      {...props}
    />
  )
)

Webcam.displayName = "Webcam"
