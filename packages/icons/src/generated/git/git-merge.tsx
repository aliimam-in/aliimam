/**
 * Auto-generated logo component: Git Merge (default)
 * Category: git
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface GitMergeLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const GitMergeLogo = React.forwardRef<SVGSVGElement, GitMergeLogoProps>(
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
      <circle cx="18" cy="18" r="3" />
  <circle cx="6" cy="6" r="3" />
  <path d="M6 21V9a9 9 0 0 0 9 9" />
    </svg>
  )
);

GitMergeLogo.displayName = "GitMergeLogo";

export const GitMergeLogoMetadata = {
  id: "git-merge",
  baseId: "git-merge",
  variant: "default",
  name: "Git Merge",
  category: "git",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default GitMergeLogo;
