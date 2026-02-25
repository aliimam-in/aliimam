/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ListIndentDecreaseProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ListIndentDecrease = React.forwardRef<SVGSVGElement, ListIndentDecreaseProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M21 5H11" />
  <path d="M21 12H11" />
  <path d="M21 19H11" />
  <path d="m7 8-4 4 4 4" />
    </svg>
  )
);
ListIndentDecrease.displayName = "ListIndentDecrease";
export const ListIndentDecreaseMetadata = { id: "list-indent-decrease", baseId: "list-indent-decrease", variant: "default", name: "List Indent Decrease", category: "list", tags: [], viewBox: "0 0 24 24" } as const;
export default ListIndentDecrease;
