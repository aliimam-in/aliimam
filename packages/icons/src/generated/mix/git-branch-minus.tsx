/**
 * Auto-generated logo component: Git Branch Minus (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface GitBranchMinusLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const GitBranchMinusLogo = React.forwardRef<SVGSVGElement, GitBranchMinusLogoProps>(
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
      <path d="M15 6a9 9 0 0 0-9 9V3" />
  <path d="M21 18h-6" />
  <circle cx="18" cy="6" r="3" />
  <circle cx="6" cy="18" r="3" />
    </svg>
  )
);

GitBranchMinusLogo.displayName = "GitBranchMinusLogo";

export const GitBranchMinusLogoMetadata = {
  id: "git-branch-minus",
  baseId: "git-branch-minus",
  variant: "default",
  name: "Git Branch Minus",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default GitBranchMinusLogo;
