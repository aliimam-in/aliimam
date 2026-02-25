/**
 * Auto-generated logo component: Git Merge Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface GitMergeOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const GitMergeOutlineLogo = React.forwardRef<SVGSVGElement, GitMergeOutlineLogoProps>(
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
  <path d="M15 12a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  <path d="M7 8l0 8" />
  <path d="M7 8a4 4 0 0 0 4 4h4" />
    </svg>
  )
);

GitMergeOutlineLogo.displayName = "GitMergeOutlineLogo";

export const GitMergeOutlineLogoMetadata = {
  id: "git-merge-outline",
  baseId: "git-merge-outline",
  variant: "default",
  name: "Git Merge Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default GitMergeOutlineLogo;
