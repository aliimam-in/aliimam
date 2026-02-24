
import * as React from "react"

export interface BracketsProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const Brackets = React.forwardRef<SVGSVGElement, BracketsProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M16 3h3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-3m-8 0H5a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h3"/>` }}
      {...props}
    />
  )
)

Brackets.displayName = "Brackets"
