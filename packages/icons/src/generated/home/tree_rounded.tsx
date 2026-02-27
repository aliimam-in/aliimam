/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface TreeRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const TreeRounded = React.forwardRef<SVGSVGElement, TreeRoundedProps>(
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
      <path d="M16.17 10.06H7.82998C6.64998 10.06 6.23998 9.27 6.92998 8.31L11.1 2.47001C11.59 1.77001 12.41 1.77001 12.89 2.47001L17.06 8.31C17.76 9.27 17.35 10.06 16.17 10.06Z"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17.59 18H6.42001C4.84001 18 4.30001 16.95 5.23001 15.67L9.22 10.06H14.79L18.78 15.67C19.71 16.95 19.17 18 17.59 18Z"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 22V18"   strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
TreeRounded.displayName = "TreeRounded";
export const TreeRoundedMetadata = { 
  id: "tree_rounded", 
  baseId: "tree", 
  variant: "rounded", 
  name: "Tree", 
  category: "home", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default TreeRounded;
