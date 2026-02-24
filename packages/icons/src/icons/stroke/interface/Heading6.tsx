
import * as React from "react"

export interface Heading6Props extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const Heading6 = React.forwardRef<SVGSVGElement, Heading6Props>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M4 12h8m-8 6V6m8 12V6"/><circle cx="19" cy="16" r="2"/><path d="M20 10c-2 2-3 3.5-3 6"/></g>` }}
      {...props}
    />
  )
)

Heading6.displayName = "Heading6"
