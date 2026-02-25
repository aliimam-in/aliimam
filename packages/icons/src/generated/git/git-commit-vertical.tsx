/**
 * Auto-generated logo component: Git Commit Vertical (default)
 * Category: git
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface GitCommitVerticalLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const GitCommitVerticalLogo = React.forwardRef<SVGSVGElement, GitCommitVerticalLogoProps>(
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
      <path d="M12 3v6" />
  <circle cx="12" cy="12" r="3" />
  <path d="M12 15v6" />
    </svg>
  )
);

GitCommitVerticalLogo.displayName = "GitCommitVerticalLogo";

export const GitCommitVerticalLogoMetadata = {
  id: "git-commit-vertical",
  baseId: "git-commit-vertical",
  variant: "default",
  name: "Git Commit Vertical",
  category: "git",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default GitCommitVerticalLogo;
