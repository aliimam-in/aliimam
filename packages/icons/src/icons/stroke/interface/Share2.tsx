
import * as React from "react"

export interface Share2Props extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const Share2 = React.forwardRef<SVGSVGElement, Share2Props>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="m8.59 13.51l6.83 3.98m-.01-10.98l-6.82 3.98"/></g>` }}
      {...props}
    />
  )
)

Share2.displayName = "Share2"
