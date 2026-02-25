/**
 * Auto-generated logo component: Git Branch Deleted Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface GitBranchDeletedOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const GitBranchDeletedOutlineLogo = React.forwardRef<SVGSVGElement, GitBranchDeletedOutlineLogoProps>(
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
      <path d="M5 18a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  <path d="M5 6a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  <path d="M7 8v8" />
  <path d="M9 18h6a2 2 0 0 0 2 -2v-5" />
  <path d="M14 14l3 -3l3 3" />
  <path d="M15 4l4 4" />
  <path d="M15 8l4 -4" />
    </svg>
  )
);

GitBranchDeletedOutlineLogo.displayName = "GitBranchDeletedOutlineLogo";

export const GitBranchDeletedOutlineLogoMetadata = {
  id: "git-branch-deleted-outline",
  baseId: "git-branch-deleted-outline",
  variant: "default",
  name: "Git Branch Deleted Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default GitBranchDeletedOutlineLogo;
