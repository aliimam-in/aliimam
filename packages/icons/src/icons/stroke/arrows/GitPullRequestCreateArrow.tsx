
import * as React from "react"

export interface GitPullRequestCreateArrowProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const GitPullRequestCreateArrow = React.forwardRef<SVGSVGElement, GitPullRequestCreateArrowProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><circle cx="5" cy="6" r="3"/><path d="M5 9v12M15 9l-3-3l3-3"/><path d="M12 6h5a2 2 0 0 1 2 2v3m0 4v6m3-3h-6"/></g>` }}
      {...props}
    />
  )
)

GitPullRequestCreateArrow.displayName = "GitPullRequestCreateArrow"
