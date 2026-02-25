/**
 * Auto-generated logo component: Git Pull Request (default)
 * Category: git
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface GitPullRequestLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const GitPullRequestLogo = React.forwardRef<SVGSVGElement, GitPullRequestLogoProps>(
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
  <path d="M13 6h3a2 2 0 0 1 2 2v7" />
  <line x1="6" x2="6" y1="9" y2="21" />
    </svg>
  )
);

GitPullRequestLogo.displayName = "GitPullRequestLogo";

export const GitPullRequestLogoMetadata = {
  id: "git-pull-request",
  baseId: "git-pull-request",
  variant: "default",
  name: "Git Pull Request",
  category: "git",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default GitPullRequestLogo;
