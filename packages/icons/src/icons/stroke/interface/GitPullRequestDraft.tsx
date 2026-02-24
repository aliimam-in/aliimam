
import * as React from "react"

export interface GitPullRequestDraftProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const GitPullRequestDraft = React.forwardRef<SVGSVGElement, GitPullRequestDraftProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><circle cx="18" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><path d="M18 6V5m0 6v-1M6 9v12"/></g>` }}
      {...props}
    />
  )
)

GitPullRequestDraft.displayName = "GitPullRequestDraft"
