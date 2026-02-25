/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface TentTreeProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const TentTree = React.forwardRef<SVGSVGElement, TentTreeProps>(
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
      <circle cx="4" cy="4" r="2" />
  <path d="m14 5 3-3 3 3" />
  <path d="m14 10 3-3 3 3" />
  <path d="M17 14V2" />
  <path d="M17 14H7l-5 8h20Z" />
  <path d="M8 14v8" />
  <path d="m9 14 5 8" />
    </svg>
  )
);
TentTree.displayName = "TentTree";
export const TentTreeMetadata = { 
  id: "tent-tree", 
  baseId: "tent-tree", 
  variant: "default", 
  name: "Tent Tree", 
  category: "building", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default TentTree;
