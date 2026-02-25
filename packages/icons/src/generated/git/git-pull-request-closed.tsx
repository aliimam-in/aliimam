/**
 * Auto-generated logo component: Git Pull Request Closed (default)
 * Category: git
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface GitPullRequestClosedLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const GitPullRequestClosedLogo = React.forwardRef<SVGSVGElement, GitPullRequestClosedLogoProps>(
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
      <circle cx="6" cy="6" r="3" />
  <path d="M6 9v12" />
  <path d="m21 3-6 6" />
  <path d="m21 9-6-6" />
  <path d="M18 11.5V15" />
  <circle cx="18" cy="18" r="3" />
    </svg>
  )
);

GitPullRequestClosedLogo.displayName = "GitPullRequestClosedLogo";

export const GitPullRequestClosedLogoMetadata = {
  id: "git-pull-request-closed",
  baseId: "git-pull-request-closed",
  variant: "default",
  name: "Git Pull Request Closed",
  category: "git",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default GitPullRequestClosedLogo;
