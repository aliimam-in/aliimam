
import * as React from "react"

export interface SpellCheckProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const SpellCheck = React.forwardRef<SVGSVGElement, SpellCheckProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="m6 16l6-12l6 12M8 12h8m0 8l2 2l4-4"/>` }}
      {...props}
    />
  )
)

SpellCheck.displayName = "SpellCheck"
