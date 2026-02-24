
import * as React from "react"

export interface GitCompareArrowsProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const GitCompareArrows = React.forwardRef<SVGSVGElement, GitCompareArrowsProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><circle cx="5" cy="6" r="3"/><path d="M12 6h5a2 2 0 0 1 2 2v7"/><path d="m15 9l-3-3l3-3"/><circle cx="19" cy="18" r="3"/><path d="M12 18H7a2 2 0 0 1-2-2V9"/><path d="m9 15l3 3l-3 3"/></g>` }}
      {...props}
    />
  )
)

GitCompareArrows.displayName = "GitCompareArrows"
