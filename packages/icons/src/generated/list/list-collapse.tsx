/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ListCollapseProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ListCollapse = React.forwardRef<SVGSVGElement, ListCollapseProps>(
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
      <path d="M10 5h11" />
  <path d="M10 12h11" />
  <path d="M10 19h11" />
  <path d="m3 10 3-3-3-3" />
  <path d="m3 20 3-3-3-3" />
    </svg>
  )
);
ListCollapse.displayName = "ListCollapse";
export const ListCollapseMetadata = { 
  id: "list-collapse", 
  baseId: "list-collapse", 
  variant: "default", 
  name: "List Collapse", 
  category: "list", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default ListCollapse;
