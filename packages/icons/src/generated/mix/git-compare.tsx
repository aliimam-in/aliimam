/**
 * Auto-generated logo component: Git Compare (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface GitCompareLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const GitCompareLogo = React.forwardRef<SVGSVGElement, GitCompareLogoProps>(
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
  <path d="M13 6h3a2 2 0 0 1 2 2v7" />
  <path d="M11 18H8a2 2 0 0 1-2-2V9" />
    </svg>
  )
);

GitCompareLogo.displayName = "GitCompareLogo";

export const GitCompareLogoMetadata = {
  id: "git-compare",
  baseId: "git-compare",
  variant: "default",
  name: "Git Compare",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default GitCompareLogo;
