/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ListFilterProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ListFilter = React.forwardRef<SVGSVGElement, ListFilterProps>(
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
      <path d="M2 5h20" />
  <path d="M6 12h12" />
  <path d="M9 19h6" />
    </svg>
  )
);
ListFilter.displayName = "ListFilter";
export const ListFilterMetadata = { 
  id: "list-filter", 
  baseId: "list-filter", 
  variant: "default", 
  name: "List Filter", 
  category: "list", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default ListFilter;
