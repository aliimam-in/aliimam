
import * as React from "react"

export interface ChevronsUpDownProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const ChevronsUpDown = React.forwardRef<SVGSVGElement, ChevronsUpDownProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="m7 15l5 5l5-5M7 9l5-5l5 5"/>` }}
      {...props}
    />
  )
)

ChevronsUpDown.displayName = "ChevronsUpDown"
