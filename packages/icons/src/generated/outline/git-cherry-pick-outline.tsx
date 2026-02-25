/**
 * Auto-generated logo component: Git Cherry Pick Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface GitCherryPickOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const GitCherryPickOutlineLogo = React.forwardRef<SVGSVGElement, GitCherryPickOutlineLogoProps>(
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
      <path d="M4 12a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
  <path d="M7 3v6" />
  <path d="M7 15v6" />
  <path d="M13 7h2.5l1.5 5l-1.5 5h-2.5" />
  <path d="M17 12h3" />
    </svg>
  )
);

GitCherryPickOutlineLogo.displayName = "GitCherryPickOutlineLogo";

export const GitCherryPickOutlineLogoMetadata = {
  id: "git-cherry-pick-outline",
  baseId: "git-cherry-pick-outline",
  variant: "default",
  name: "Git Cherry Pick Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default GitCherryPickOutlineLogo;
