
import * as React from "react"

export interface XProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const X = React.forwardRef<SVGSVGElement, XProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M18 6L6 18M6 6l12 12"/>` }}
      {...props}
    />
  )
)

X.displayName = "X"
