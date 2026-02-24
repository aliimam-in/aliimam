
import * as React from "react"

export interface EqualNotProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const EqualNot = React.forwardRef<SVGSVGElement, EqualNotProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M5 9h14M5 15h14m0-10L5 19"/>` }}
      {...props}
    />
  )
)

EqualNot.displayName = "EqualNot"
