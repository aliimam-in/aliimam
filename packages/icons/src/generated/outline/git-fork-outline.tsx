/**
 * Auto-generated logo component: Git Fork Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface GitForkOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const GitForkOutlineLogo = React.forwardRef<SVGSVGElement, GitForkOutlineLogoProps>(
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
      <path d="M10 18a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  <path d="M5 6a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  <path d="M15 6a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  <path d="M7 8v2a2 2 0 0 0 2 2h6a2 2 0 0 0 2 -2v-2" />
  <path d="M12 12l0 4" />
    </svg>
  )
);

GitForkOutlineLogo.displayName = "GitForkOutlineLogo";

export const GitForkOutlineLogoMetadata = {
  id: "git-fork-outline",
  baseId: "git-fork-outline",
  variant: "default",
  name: "Git Fork Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default GitForkOutlineLogo;
