/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface TreeFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const TreeFilled = React.forwardRef<SVGSVGElement, TreeFilledProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg 
      ref={ref}
      width={size}
      height={size} 
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...(strokeWidth !== undefined ? { strokeWidth } : {})}
      {...props}
    >
      <path d="M16.17 10.0598H7.83C6.65 10.0598 6.24 9.26982 6.93 8.30982L11.1 2.46982C11.59 1.76982 12.41 1.76982 12.9 2.46982L17.07 8.30982C17.76 9.26982 17.35 10.0598 16.17 10.0598Z" fill="currentColor"/>
<path d="M17.59 18.0001H6.41C4.83 18.0001 4.29 16.9501 5.22 15.6701L9.21 10.0601H14.79L18.78 15.6701C19.71 16.9501 19.17 18.0001 17.59 18.0001Z" fill="currentColor"/>
<path d="M12.75 18V22C12.75 22.41 12.41 22.75 12 22.75C11.59 22.75 11.25 22.41 11.25 22V18H12.75Z" fill="currentColor"/>
    </svg>
  )
);
TreeFilled.displayName = "TreeFilled";
export const TreeFilledMetadata = { 
  id: "tree_filled", 
  baseId: "tree", 
  variant: "filled", 
  name: "Tree", 
  category: "app", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default TreeFilled;
