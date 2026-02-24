/**
 * Auto-generated logo component: Git Pull Request Draft (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface GitPullRequestDraftLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const GitPullRequestDraftLogo = React.forwardRef<SVGSVGElement, GitPullRequestDraftLogoProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
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

GitPullRequestDraftLogo.displayName = "GitPullRequestDraftLogo";

export const GitPullRequestDraftLogoMetadata = {
  id: "git-pull-request-draft",
  baseId: "git-pull-request-draft",
  variant: "default",
  name: "Git Pull Request Draft",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default GitPullRequestDraftLogo;
