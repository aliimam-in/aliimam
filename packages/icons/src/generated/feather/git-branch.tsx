/**
 * Auto-generated logo component: Git Branch (default)
 * Category: feather
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface GitBranchLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const GitBranchLogo = React.forwardRef<SVGSVGElement, GitBranchLogoProps>(
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
      <line x1="6" y1="3" x2="6" y2="15"/><circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M18 9a9 9 0 0 1-9 9"/>
    </svg>
  )
);

GitBranchLogo.displayName = "GitBranchLogo";

export const GitBranchLogoMetadata = {
  id: "git-branch",
  baseId: "git-branch",
  variant: "default",
  name: "Git Branch",
  category: "feather",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default GitBranchLogo;
