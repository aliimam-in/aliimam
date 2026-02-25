/**
 * Auto-generated logo component: Git Pull Request Arrow (default)
 * Category: git
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface GitPullRequestArrowLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const GitPullRequestArrowLogo = React.forwardRef<SVGSVGElement, GitPullRequestArrowLogoProps>(
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
      <circle cx="5" cy="6" r="3" />
  <path d="M5 9v12" />
  <circle cx="19" cy="18" r="3" />
  <path d="m15 9-3-3 3-3" />
  <path d="M12 6h5a2 2 0 0 1 2 2v7" />
    </svg>
  )
);

GitPullRequestArrowLogo.displayName = "GitPullRequestArrowLogo";

export const GitPullRequestArrowLogoMetadata = {
  id: "git-pull-request-arrow",
  baseId: "git-pull-request-arrow",
  variant: "default",
  name: "Git Pull Request Arrow",
  category: "git",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default GitPullRequestArrowLogo;
