
import * as React from "react"

export interface ChevronDownProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const ChevronDown = React.forwardRef<SVGSVGElement, ChevronDownProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="m6 9l6 6l6-6"/>` }}
      {...props}
    />
  )
)

ChevronDown.displayName = "ChevronDown"
