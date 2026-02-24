/**
 * Auto-generated logo component: Git Pull Request Create Arrow (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface GitPullRequestCreateArrowLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const GitPullRequestCreateArrowLogo = React.forwardRef<SVGSVGElement, GitPullRequestCreateArrowLogoProps>(
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
  <path d="m15 9-3-3 3-3" />
  <path d="M12 6h5a2 2 0 0 1 2 2v3" />
  <path d="M19 15v6" />
  <path d="M22 18h-6" />
    </svg>
  )
);

GitPullRequestCreateArrowLogo.displayName = "GitPullRequestCreateArrowLogo";

export const GitPullRequestCreateArrowLogoMetadata = {
  id: "git-pull-request-create-arrow",
  baseId: "git-pull-request-create-arrow",
  variant: "default",
  name: "Git Pull Request Create Arrow",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default GitPullRequestCreateArrowLogo;
