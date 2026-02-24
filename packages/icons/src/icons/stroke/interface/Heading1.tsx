
import * as React from "react"

export interface Heading1Props extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const Heading1 = React.forwardRef<SVGSVGElement, Heading1Props>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M4 12h8m-8 6V6m8 12V6m5 6l3-2v8"/>` }}
      {...props}
    />
  )
)

Heading1.displayName = "Heading1"
