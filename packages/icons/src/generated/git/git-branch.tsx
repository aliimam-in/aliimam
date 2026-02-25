/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface GitBranchProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const GitBranch = React.forwardRef<SVGSVGElement, GitBranchProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg 
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
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
GitBranch.displayName = "GitBranch";
export const GitBranchMetadata = { 
  id: "git-branch", 
  baseId: "git-branch", 
  variant: "default", 
  name: "Git Branch", 
  category: "git", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default GitBranch;
