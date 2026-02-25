/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ListCheckProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ListCheck = React.forwardRef<SVGSVGElement, ListCheckProps>(
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
      <path d="M16 5H3" />
  <path d="M16 12H3" />
  <path d="M11 19H3" />
  <path d="m15 18 2 2 4-4" />
    </svg>
  )
);
ListCheck.displayName = "ListCheck";
export const ListCheckMetadata = { 
  id: "list-check", 
  baseId: "list-check", 
  variant: "default", 
  name: "List Check", 
  category: "list", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default ListCheck;
