/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface GitPullRequestCreateArrowProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const GitPullRequestCreateArrow = React.forwardRef<SVGSVGElement, GitPullRequestCreateArrowProps>(
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
      <circle cx="5" cy="6" r="3" />
  <path d="M5 9v12" />
  <path d="m15 9-3-3 3-3" />
  <path d="M12 6h5a2 2 0 0 1 2 2v3" />
  <path d="M19 15v6" />
  <path d="M22 18h-6" />
    </svg>
  )
);
GitPullRequestCreateArrow.displayName = "GitPullRequestCreateArrow";
export const GitPullRequestCreateArrowMetadata = { 
  id: "git-pull-request-create-arrow", 
  baseId: "git-pull-request-create-arrow", 
  variant: "default", 
  name: "Git Pull Request Create Arrow", 
  category: "git", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default GitPullRequestCreateArrow;
