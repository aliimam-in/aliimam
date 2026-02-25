/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface TableOfContentsProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const TableOfContents = React.forwardRef<SVGSVGElement, TableOfContentsProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M16 5H3" />
  <path d="M16 12H3" />
  <path d="M16 19H3" />
  <path d="M21 5h.01" />
  <path d="M21 12h.01" />
  <path d="M21 19h.01" />
    </svg>
  )
);
TableOfContents.displayName = "TableOfContents";
export const TableOfContentsMetadata = { id: "table-of-contents", baseId: "table-of-contents", variant: "default", name: "Table Of Contents", category: "table", tags: [], viewBox: "0 0 24 24" } as const;
export default TableOfContents;
