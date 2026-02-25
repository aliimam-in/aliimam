/**
 * Auto-generated logo component: Git Pull Request Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface GitPullRequestOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const GitPullRequestOutlineLogo = React.forwardRef<SVGSVGElement, GitPullRequestOutlineLogoProps>(
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
  <path d="M6 8l0 8" />
  <path d="M11 6h5a2 2 0 0 1 2 2v8" />
  <path d="M14 9l-3 -3l3 -3" />
    </svg>
  )
);

GitPullRequestOutlineLogo.displayName = "GitPullRequestOutlineLogo";

export const GitPullRequestOutlineLogoMetadata = {
  id: "git-pull-request-outline",
  baseId: "git-pull-request-outline",
  variant: "default",
  name: "Git Pull Request Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default GitPullRequestOutlineLogo;
