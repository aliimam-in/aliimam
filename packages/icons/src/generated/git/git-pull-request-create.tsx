/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface GitPullRequestCreateProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const GitPullRequestCreate = React.forwardRef<SVGSVGElement, GitPullRequestCreateProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <circle cx="6" cy="6" r="3" />
  <path d="M6 9v12" />
  <path d="M13 6h3a2 2 0 0 1 2 2v3" />
  <path d="M18 15v6" />
  <path d="M21 18h-6" />
    </svg>
  )
);
GitPullRequestCreate.displayName = "GitPullRequestCreate";
export const GitPullRequestCreateMetadata = { id: "git-pull-request-create", baseId: "git-pull-request-create", variant: "default", name: "Git Pull Request Create", category: "git", tags: [], viewBox: "0 0 24 24" } as const;
export default GitPullRequestCreate;
