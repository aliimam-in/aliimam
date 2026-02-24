
import * as React from "react"

export interface GitBranchProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const GitBranch = React.forwardRef<SVGSVGElement, GitBranchProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M15 6a9 9 0 0 0-9 9V3"/><circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/></g>` }}
      {...props}
    />
  )
)

GitBranch.displayName = "GitBranch"
