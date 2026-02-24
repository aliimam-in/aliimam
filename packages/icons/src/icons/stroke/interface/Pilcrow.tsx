
import * as React from "react"

export interface PilcrowProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const Pilcrow = React.forwardRef<SVGSVGElement, PilcrowProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M13 4v16m4-16v16m2-16H9.5a4.5 4.5 0 0 0 0 9H13"/>` }}
      {...props}
    />
  )
)

Pilcrow.displayName = "Pilcrow"
