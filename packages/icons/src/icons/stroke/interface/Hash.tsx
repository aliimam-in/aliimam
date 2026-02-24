
import * as React from "react"

export interface HashProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const Hash = React.forwardRef<SVGSVGElement, HashProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M4 9h16M4 15h16M10 3L8 21m8-18l-2 18"/>` }}
      {...props}
    />
  )
)

Hash.displayName = "Hash"
