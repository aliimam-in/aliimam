/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface GitPullRequestDraftProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const GitPullRequestDraft = React.forwardRef<SVGSVGElement, GitPullRequestDraftProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg 
      ref={ref}
      width={size}
      height={size} 
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...(strokeWidth !== undefined ? { strokeWidth } : {})}
      {...props}
    >
      <circle cx="18" cy="18" r="3" />
  <circle cx="6" cy="6" r="3" />
  <path d="M18 6V5" />
  <path d="M18 11v-1" />
  <line x1="6" x2="6" y1="9" y2="21" />
    </svg>
  )
);
GitPullRequestDraft.displayName = "GitPullRequestDraft";
export const GitPullRequestDraftMetadata = { 
  id: "git-pull-request-draft", 
  baseId: "git-pull-request-draft", 
  variant: "default", 
  name: "Git Pull Request Draft", 
  category: "code", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default GitPullRequestDraft;
