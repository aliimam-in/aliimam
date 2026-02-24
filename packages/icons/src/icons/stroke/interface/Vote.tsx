
import * as React from "react"

export interface VoteProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const Vote = React.forwardRef<SVGSVGElement, VoteProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="m9 12l2 2l4-4"/><path d="M5 7c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v12H5zm17 12H2"/></g>` }}
      {...props}
    />
  )
)

Vote.displayName = "Vote"
