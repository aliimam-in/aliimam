
import * as React from "react"

export interface BrickWallProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const BrickWall = React.forwardRef<SVGSVGElement, BrickWallProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M12 9v6m4 0v6m0-18v6M3 15h18M3 9h18M8 15v6M8 3v6"/></g>` }}
      {...props}
    />
  )
)

BrickWall.displayName = "BrickWall"
