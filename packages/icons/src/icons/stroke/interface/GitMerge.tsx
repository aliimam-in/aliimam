
import * as React from "react"

export interface GitMergeProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const GitMerge = React.forwardRef<SVGSVGElement, GitMergeProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><circle cx="18" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><path d="M6 21V9a9 9 0 0 0 9 9"/></g>` }}
      {...props}
    />
  )
)

GitMerge.displayName = "GitMerge"
