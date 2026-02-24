
import * as React from "react"

export interface ScreenShareOffProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const ScreenShareOff = React.forwardRef<SVGSVGElement, ScreenShareOffProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M13 3H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-3M8 21h8m-4-4v4M22 3l-5 5m0-5l5 5"/>` }}
      {...props}
    />
  )
)

ScreenShareOff.displayName = "ScreenShareOff"
