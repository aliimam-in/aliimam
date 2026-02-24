
import * as React from "react"

export interface Heading2Props extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const Heading2 = React.forwardRef<SVGSVGElement, Heading2Props>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M4 12h8m-8 6V6m8 12V6m9 12h-4c0-4 4-3 4-6c0-1.5-2-2.5-4-1"/>` }}
      {...props}
    />
  )
)

Heading2.displayName = "Heading2"
