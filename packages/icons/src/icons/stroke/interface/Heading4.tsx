
import * as React from "react"

export interface Heading4Props extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const Heading4 = React.forwardRef<SVGSVGElement, Heading4Props>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M12 18V6m5 4v3a1 1 0 0 0 1 1h3m0-4v8M4 12h8m-8 6V6"/>` }}
      {...props}
    />
  )
)

Heading4.displayName = "Heading4"
