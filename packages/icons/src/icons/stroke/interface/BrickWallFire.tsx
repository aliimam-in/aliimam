
import * as React from "react"

export interface BrickWallFireProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const BrickWallFire = React.forwardRef<SVGSVGElement, BrickWallFireProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M16 3v2.107M17 9c1 3 2.5 3.5 3.5 4.5A5 5 0 0 1 22 17a5 5 0 0 1-10 0c0-.3 0-.6.1-.9a2 2 0 1 0 3.3-2C13 11.5 16 9 17 9"/><path d="M21 8.274V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.938M3 15h5.253M3 9h8.228M8 15v6M8 3v6"/></g>` }}
      {...props}
    />
  )
)

BrickWallFire.displayName = "BrickWallFire"
