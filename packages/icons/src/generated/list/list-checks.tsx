/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ListChecksProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ListChecks = React.forwardRef<SVGSVGElement, ListChecksProps>(
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
      <path d="M13 5h8" />
  <path d="M13 12h8" />
  <path d="M13 19h8" />
  <path d="m3 17 2 2 4-4" />
  <path d="m3 7 2 2 4-4" />
    </svg>
  )
);
ListChecks.displayName = "ListChecks";
export const ListChecksMetadata = { 
  id: "list-checks", 
  baseId: "list-checks", 
  variant: "default", 
  name: "List Checks", 
  category: "list", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default ListChecks;
