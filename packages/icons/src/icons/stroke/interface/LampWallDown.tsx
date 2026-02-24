
import * as React from "react"

export interface LampWallDownProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const LampWallDown = React.forwardRef<SVGSVGElement, LampWallDownProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M19.929 18.629A1 1 0 0 1 19 20H9a1 1 0 0 1-.928-1.371l2-5A1 1 0 0 1 11 13h6a1 1 0 0 1 .928.629zM6 3a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H5a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm2 3h4a2 2 0 0 1 2 2v5"/>` }}
      {...props}
    />
  )
)

LampWallDown.displayName = "LampWallDown"
