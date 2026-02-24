
import * as React from "react"

export interface GitPullRequestProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const GitPullRequest = React.forwardRef<SVGSVGElement, GitPullRequestProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><circle cx="18" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><path d="M13 6h3a2 2 0 0 1 2 2v7M6 9v12"/></g>` }}
      {...props}
    />
  )
)

GitPullRequest.displayName = "GitPullRequest"
