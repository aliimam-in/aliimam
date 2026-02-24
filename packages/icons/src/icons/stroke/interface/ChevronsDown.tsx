
import * as React from "react"

export interface ChevronsDownProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const ChevronsDown = React.forwardRef<SVGSVGElement, ChevronsDownProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="m7 6l5 5l5-5M7 13l5 5l5-5"/>` }}
      {...props}
    />
  )
)

ChevronsDown.displayName = "ChevronsDown"
