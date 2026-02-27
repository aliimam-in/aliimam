/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface GitBranchPlusProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const GitBranchPlus = React.forwardRef<SVGSVGElement, GitBranchPlusProps>(
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
      <path d="M6 3v12" />
  <path d="M18 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
  <path d="M6 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
  <path d="M15 6a9 9 0 0 0-9 9" />
  <path d="M18 15v6" />
  <path d="M21 18h-6" />
    </svg>
  )
);
GitBranchPlus.displayName = "GitBranchPlus";
export const GitBranchPlusMetadata = { 
  id: "git-branch-plus", 
  baseId: "git-branch-plus", 
  variant: "default", 
  name: "Git Branch Plus", 
  category: "code", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default GitBranchPlus;
