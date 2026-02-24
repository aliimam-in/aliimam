
import * as React from "react"

export interface GitMergeConflictProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const GitMergeConflict = React.forwardRef<SVGSVGElement, GitMergeConflictProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M12 6h4a2 2 0 0 1 2 2v7M6 12v9M9 3L3 9m6 0L3 3"/><circle cx="18" cy="18" r="3"/></g>` }}
      {...props}
    />
  )
)

GitMergeConflict.displayName = "GitMergeConflict"
