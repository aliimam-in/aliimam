
import * as React from "react"

export interface Link2Props extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const Link2 = React.forwardRef<SVGSVGElement, Link2Props>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M9 17H7A5 5 0 0 1 7 7h2m6 0h2a5 5 0 1 1 0 10h-2m-7-5h8"/>` }}
      {...props}
    />
  )
)

Link2.displayName = "Link2"
