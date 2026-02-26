/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface TableColumnsSplitProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const TableColumnsSplit = React.forwardRef<SVGSVGElement, TableColumnsSplitProps>(
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
      <path d="M14 14v2" />
  <path d="M14 20v2" />
  <path d="M14 2v2" />
  <path d="M14 8v2" />
  <path d="M2 15h8" />
  <path d="M2 3h6a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H2" />
  <path d="M2 9h8" />
  <path d="M22 15h-4" />
  <path d="M22 3h-2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h2" />
  <path d="M22 9h-4" />
  <path d="M5 3v18" />
    </svg>
  )
);
TableColumnsSplit.displayName = "TableColumnsSplit";
export const TableColumnsSplitMetadata = { 
  id: "table-columns-split", 
  baseId: "table-columns-split", 
  variant: "default", 
  name: "Table Columns Split", 
  category: "table", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default TableColumnsSplit;
