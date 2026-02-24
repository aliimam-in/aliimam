
import * as React from "react"

export interface LampWallUpProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const LampWallUp = React.forwardRef<SVGSVGElement, LampWallUpProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M19.929 9.629A1 1 0 0 1 19 11H9a1 1 0 0 1-.928-1.371l2-5A1 1 0 0 1 11 4h6a1 1 0 0 1 .928.629zM6 15a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H5a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1z"/><path d="M8 18h4a2 2 0 0 0 2-2v-5"/></g>` }}
      {...props}
    />
  )
)

LampWallUp.displayName = "LampWallUp"
