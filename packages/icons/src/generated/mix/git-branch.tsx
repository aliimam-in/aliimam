/**
 * Auto-generated logo component: Git Branch (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MixGitBranchLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MixGitBranchLogo = React.forwardRef<SVGSVGElement, MixGitBranchLogoProps>(
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
  <circle cx="18" cy="6" r="3" />
  <circle cx="6" cy="18" r="3" />
    </svg>
  )
);

MixGitBranchLogo.displayName = "MixGitBranchLogo";

export const MixGitBranchLogoMetadata = {
  id: "git-branch",
  baseId: "git-branch",
  variant: "default",
  name: "Git Branch",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MixGitBranchLogo;
