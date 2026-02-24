
import * as React from "react"

export interface GitPullRequestCreateProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const GitPullRequestCreate = React.forwardRef<SVGSVGElement, GitPullRequestCreateProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><circle cx="6" cy="6" r="3"/><path d="M6 9v12m7-15h3a2 2 0 0 1 2 2v3m0 4v6m3-3h-6"/></g>` }}
      {...props}
    />
  )
)

GitPullRequestCreate.displayName = "GitPullRequestCreate"
