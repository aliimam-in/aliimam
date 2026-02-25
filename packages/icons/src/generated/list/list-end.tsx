/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ListEndProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ListEnd = React.forwardRef<SVGSVGElement, ListEndProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M16 5H3" />
  <path d="M16 12H3" />
  <path d="M9 19H3" />
  <path d="m16 16-3 3 3 3" />
  <path d="M21 5v12a2 2 0 0 1-2 2h-6" />
    </svg>
  )
);
ListEnd.displayName = "ListEnd";
export const ListEndMetadata = { id: "list-end", baseId: "list-end", variant: "default", name: "List End", category: "list", tags: [], viewBox: "0 0 24 24" } as const;
export default ListEnd;
