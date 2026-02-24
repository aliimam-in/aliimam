
import * as React from "react"

export interface ParenthesesProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const Parentheses = React.forwardRef<SVGSVGElement, ParenthesesProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M8 21s-4-3-4-9s4-9 4-9m8 0s4 3 4 9s-4 9-4 9"/>` }}
      {...props}
    />
  )
)

Parentheses.displayName = "Parentheses"
