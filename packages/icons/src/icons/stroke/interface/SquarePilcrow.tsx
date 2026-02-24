
import * as React from "react"

export interface SquarePilcrowProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const SquarePilcrow = React.forwardRef<SVGSVGElement, SquarePilcrowProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M12 12H9.5a2.5 2.5 0 0 1 0-5H17m-5 0v10m4-10v10"/></g>` }}
      {...props}
    />
  )
)

SquarePilcrow.displayName = "SquarePilcrow"
