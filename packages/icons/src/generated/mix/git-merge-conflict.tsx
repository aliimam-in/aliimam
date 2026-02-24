/**
 * Auto-generated logo component: Git Merge Conflict (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface GitMergeConflictLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const GitMergeConflictLogo = React.forwardRef<SVGSVGElement, GitMergeConflictLogoProps>(
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
      <path d="M12 6h4a2 2 0 0 1 2 2v7" />
  <path d="M6 12v9" />
  <path d="M9 3 3 9" />
  <path d="M9 9 3 3" />
  <circle cx="18" cy="18" r="3" />
    </svg>
  )
);

GitMergeConflictLogo.displayName = "GitMergeConflictLogo";

export const GitMergeConflictLogoMetadata = {
  id: "git-merge-conflict",
  baseId: "git-merge-conflict",
  variant: "default",
  name: "Git Merge Conflict",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default GitMergeConflictLogo;
