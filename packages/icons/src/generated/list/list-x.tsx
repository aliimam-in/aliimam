/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ListXProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ListX = React.forwardRef<SVGSVGElement, ListXProps>(
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
  <path d="m15.5 9.5 5 5" />
  <path d="m20.5 9.5-5 5" />
    </svg>
  )
);
ListX.displayName = "ListX";
export const ListXMetadata = { 
  id: "list-x", 
  baseId: "list-x", 
  variant: "default", 
  name: "List X", 
  category: "list", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default ListX;
