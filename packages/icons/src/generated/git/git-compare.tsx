/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface GitCompareProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const GitCompare = React.forwardRef<SVGSVGElement, GitCompareProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <circle cx="18" cy="18" r="3" />
  <circle cx="6" cy="6" r="3" />
  <path d="M13 6h3a2 2 0 0 1 2 2v7" />
  <path d="M11 18H8a2 2 0 0 1-2-2V9" />
    </svg>
  )
);
GitCompare.displayName = "GitCompare";
export const GitCompareMetadata = { id: "git-compare", baseId: "git-compare", variant: "default", name: "Git Compare", category: "git", tags: [], viewBox: "0 0 24 24" } as const;
export default GitCompare;
