/**
 * Auto-generated logo component: Git Branch Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface GitBranchOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const GitBranchOutlineLogo = React.forwardRef<SVGSVGElement, GitBranchOutlineLogoProps>(
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
  <path d="M15 6a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  <path d="M7 8l0 8" />
  <path d="M9 18h6a2 2 0 0 0 2 -2v-5" />
  <path d="M14 14l3 -3l3 3" />
    </svg>
  )
);

GitBranchOutlineLogo.displayName = "GitBranchOutlineLogo";

export const GitBranchOutlineLogoMetadata = {
  id: "git-branch-outline",
  baseId: "git-branch-outline",
  variant: "default",
  name: "Git Branch Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default GitBranchOutlineLogo;
