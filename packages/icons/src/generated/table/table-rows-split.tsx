/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface TableRowsSplitProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const TableRowsSplit = React.forwardRef<SVGSVGElement, TableRowsSplitProps>(
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
      <path d="M14 10h2" />
  <path d="M15 22v-8" />
  <path d="M15 2v4" />
  <path d="M2 10h2" />
  <path d="M20 10h2" />
  <path d="M3 19h18" />
  <path d="M3 22v-6a2 2 135 0 1 2-2h14a2 2 45 0 1 2 2v6" />
  <path d="M3 2v2a2 2 45 0 0 2 2h14a2 2 135 0 0 2-2V2" />
  <path d="M8 10h2" />
  <path d="M9 22v-8" />
  <path d="M9 2v4" />
    </svg>
  )
);
TableRowsSplit.displayName = "TableRowsSplit";
export const TableRowsSplitMetadata = { 
  id: "table-rows-split", 
  baseId: "table-rows-split", 
  variant: "default", 
  name: "Table Rows Split", 
  category: "table", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default TableRowsSplit;
