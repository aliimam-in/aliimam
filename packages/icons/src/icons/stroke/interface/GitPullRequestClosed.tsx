
import * as React from "react"

export interface GitPullRequestClosedProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const GitPullRequestClosed = React.forwardRef<SVGSVGElement, GitPullRequestClosedProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><circle cx="6" cy="6" r="3"/><path d="M6 9v12M21 3l-6 6m6 0l-6-6m3 8.5V15"/><circle cx="18" cy="18" r="3"/></g>` }}
      {...props}
    />
  )
)

GitPullRequestClosed.displayName = "GitPullRequestClosed"
