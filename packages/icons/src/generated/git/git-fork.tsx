/**
 * Auto-generated logo component: Git Fork (default)
 * Category: git
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface GitForkLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const GitForkLogo = React.forwardRef<SVGSVGElement, GitForkLogoProps>(
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
      <circle cx="12" cy="18" r="3" />
  <circle cx="6" cy="6" r="3" />
  <circle cx="18" cy="6" r="3" />
  <path d="M18 9v2c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V9" />
  <path d="M12 12v3" />
    </svg>
  )
);

GitForkLogo.displayName = "GitForkLogo";

export const GitForkLogoMetadata = {
  id: "git-fork",
  baseId: "git-fork",
  variant: "default",
  name: "Git Fork",
  category: "git",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default GitForkLogo;
