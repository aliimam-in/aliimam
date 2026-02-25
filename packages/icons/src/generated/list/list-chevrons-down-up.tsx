/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ListChevronsDownUpProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ListChevronsDownUp = React.forwardRef<SVGSVGElement, ListChevronsDownUpProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M3 5h8" />
  <path d="M3 12h8" />
  <path d="M3 19h8" />
  <path d="m15 5 3 3 3-3" />
  <path d="m15 19 3-3 3 3" />
    </svg>
  )
);
ListChevronsDownUp.displayName = "ListChevronsDownUp";
export const ListChevronsDownUpMetadata = { id: "list-chevrons-down-up", baseId: "list-chevrons-down-up", variant: "default", name: "List Chevrons Down Up", category: "list", tags: [], viewBox: "0 0 24 24" } as const;
export default ListChevronsDownUp;
