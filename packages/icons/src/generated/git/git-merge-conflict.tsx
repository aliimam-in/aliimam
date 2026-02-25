/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface GitMergeConflictProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const GitMergeConflict = React.forwardRef<SVGSVGElement, GitMergeConflictProps>(
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
      <path d="M12 6h4a2 2 0 0 1 2 2v7" />
  <path d="M6 12v9" />
  <path d="M9 3 3 9" />
  <path d="M9 9 3 3" />
  <circle cx="18" cy="18" r="3" />
    </svg>
  )
);
GitMergeConflict.displayName = "GitMergeConflict";
export const GitMergeConflictMetadata = { 
  id: "git-merge-conflict", 
  baseId: "git-merge-conflict", 
  variant: "default", 
  name: "Git Merge Conflict", 
  category: "git", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default GitMergeConflict;
