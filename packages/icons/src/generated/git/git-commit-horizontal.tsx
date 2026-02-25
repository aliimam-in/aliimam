/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface GitCommitHorizontalProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const GitCommitHorizontal = React.forwardRef<SVGSVGElement, GitCommitHorizontalProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <circle cx="12" cy="12" r="3" />
  <line x1="3" x2="9" y1="12" y2="12" />
  <line x1="15" x2="21" y1="12" y2="12" />
    </svg>
  )
);
GitCommitHorizontal.displayName = "GitCommitHorizontal";
export const GitCommitHorizontalMetadata = { id: "git-commit-horizontal", baseId: "git-commit-horizontal", variant: "default", name: "Git Commit Horizontal", category: "git", tags: [], viewBox: "0 0 24 24" } as const;
export default GitCommitHorizontal;
