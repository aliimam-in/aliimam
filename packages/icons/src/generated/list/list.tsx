/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ListProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const List = React.forwardRef<SVGSVGElement, ListProps>(
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
      <path d="M3 5h.01" />
  <path d="M3 12h.01" />
  <path d="M3 19h.01" />
  <path d="M8 5h13" />
  <path d="M8 12h13" />
  <path d="M8 19h13" />
    </svg>
  )
);
List.displayName = "List";
export const ListMetadata = { 
  id: "list", 
  baseId: "list", 
  variant: "default", 
  name: "List", 
  category: "list", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default List;
