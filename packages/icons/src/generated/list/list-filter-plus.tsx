/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ListFilterPlusProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ListFilterPlus = React.forwardRef<SVGSVGElement, ListFilterPlusProps>(
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
      <path d="M12 5H2" />
  <path d="M6 12h12" />
  <path d="M9 19h6" />
  <path d="M16 5h6" />
  <path d="M19 8V2" />
    </svg>
  )
);
ListFilterPlus.displayName = "ListFilterPlus";
export const ListFilterPlusMetadata = { 
  id: "list-filter-plus", 
  baseId: "list-filter-plus", 
  variant: "default", 
  name: "List Filter Plus", 
  category: "list", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default ListFilterPlus;
