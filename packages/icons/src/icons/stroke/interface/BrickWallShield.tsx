
import * as React from "react"

export interface BrickWallShieldProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const BrickWallShield = React.forwardRef<SVGSVGElement, BrickWallShieldProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M12 9v1.258M16 3v5.46m5 .658V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h5.75"/><path d="M22 17.5c0 2.499-1.75 3.749-3.83 4.474a.5.5 0 0 1-.335-.005c-2.085-.72-3.835-1.97-3.835-4.47V14a.5.5 0 0 1 .5-.499c1 0 2.25-.6 3.12-1.36a.6.6 0 0 1 .76-.001c.875.765 2.12 1.36 3.12 1.36a.5.5 0 0 1 .5.5zM3 15h7M3 9h12.142M8 15v6M8 3v6"/></g>` }}
      {...props}
    />
  )
)

BrickWallShield.displayName = "BrickWallShield"
