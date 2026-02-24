
import * as React from "react"

export interface OptionProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const Option = React.forwardRef<SVGSVGElement, OptionProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M3 3h6l6 18h6M14 3h7"/>` }}
      {...props}
    />
  )
)

Option.displayName = "Option"
