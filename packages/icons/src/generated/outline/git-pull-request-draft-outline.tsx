/**
 * Auto-generated logo component: Git Pull Request Draft Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface GitPullRequestDraftOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const GitPullRequestDraftOutlineLogo = React.forwardRef<SVGSVGElement, GitPullRequestDraftOutlineLogoProps>(
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
      <path d="M4 18a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  <path d="M4 6a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  <path d="M16 18a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  <path d="M6 8v8" />
  <path d="M18 11h.01" />
  <path d="M18 6h.01" />
    </svg>
  )
);

GitPullRequestDraftOutlineLogo.displayName = "GitPullRequestDraftOutlineLogo";

export const GitPullRequestDraftOutlineLogoMetadata = {
  id: "git-pull-request-draft-outline",
  baseId: "git-pull-request-draft-outline",
  variant: "default",
  name: "Git Pull Request Draft Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default GitPullRequestDraftOutlineLogo;
