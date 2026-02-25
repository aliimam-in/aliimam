/**
 * Auto-generated logo component: Git Commit Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface GitCommitOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const GitCommitOutlineLogo = React.forwardRef<SVGSVGElement, GitCommitOutlineLogoProps>(
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
      <path d="M9 12a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
  <path d="M12 3l0 6" />
  <path d="M12 15l0 6" />
    </svg>
  )
);

GitCommitOutlineLogo.displayName = "GitCommitOutlineLogo";

export const GitCommitOutlineLogoMetadata = {
  id: "git-commit-outline",
  baseId: "git-commit-outline",
  variant: "default",
  name: "Git Commit Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default GitCommitOutlineLogo;
