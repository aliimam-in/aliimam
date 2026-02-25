/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ListPlusProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ListPlus = React.forwardRef<SVGSVGElement, ListPlusProps>(
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
  <path d="M11 12H3" />
  <path d="M16 19H3" />
  <path d="M18 9v6" />
  <path d="M21 12h-6" />
    </svg>
  )
);
ListPlus.displayName = "ListPlus";
export const ListPlusMetadata = { 
  id: "list-plus", 
  baseId: "list-plus", 
  variant: "default", 
  name: "List Plus", 
  category: "list", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default ListPlus;
