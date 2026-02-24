/**
 * Auto-generated logo component: Git Graph (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface GitGraphLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const GitGraphLogo = React.forwardRef<SVGSVGElement, GitGraphLogoProps>(
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
  <path d="M5 9v6" />
  <circle cx="5" cy="18" r="3" />
  <path d="M12 3v18" />
  <circle cx="19" cy="6" r="3" />
  <path d="M16 15.7A9 9 0 0 0 19 9" />
    </svg>
  )
);

GitGraphLogo.displayName = "GitGraphLogo";

export const GitGraphLogoMetadata = {
  id: "git-graph",
  baseId: "git-graph",
  variant: "default",
  name: "Git Graph",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default GitGraphLogo;
