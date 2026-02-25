/**
 * Auto-generated logo component: Git Compare Arrows (default)
 * Category: git
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface GitCompareArrowsLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const GitCompareArrowsLogo = React.forwardRef<SVGSVGElement, GitCompareArrowsLogoProps>(
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
      <circle cx="5" cy="6" r="3" />
  <path d="M12 6h5a2 2 0 0 1 2 2v7" />
  <path d="m15 9-3-3 3-3" />
  <circle cx="19" cy="18" r="3" />
  <path d="M12 18H7a2 2 0 0 1-2-2V9" />
  <path d="m9 15 3 3-3 3" />
    </svg>
  )
);

GitCompareArrowsLogo.displayName = "GitCompareArrowsLogo";

export const GitCompareArrowsLogoMetadata = {
  id: "git-compare-arrows",
  baseId: "git-compare-arrows",
  variant: "default",
  name: "Git Compare Arrows",
  category: "git",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default GitCompareArrowsLogo;
