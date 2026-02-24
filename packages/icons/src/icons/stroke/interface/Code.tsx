
import * as React from "react"

export interface CodeProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const Code = React.forwardRef<SVGSVGElement, CodeProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="m16 18l6-6l-6-6M8 6l-6 6l6 6"/>` }}
      {...props}
    />
  )
)

Code.displayName = "Code"
