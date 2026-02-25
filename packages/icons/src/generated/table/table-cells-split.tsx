/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface TableCellsSplitProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const TableCellsSplit = React.forwardRef<SVGSVGElement, TableCellsSplitProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M12 15V9" />
  <path d="M3 15h18" />
  <path d="M3 9h18" />
  <rect width="18" height="18" x="3" y="3" rx="2" />
    </svg>
  )
);
TableCellsSplit.displayName = "TableCellsSplit";
export const TableCellsSplitMetadata = { id: "table-cells-split", baseId: "table-cells-split", variant: "default", name: "Table Cells Split", category: "table", tags: [], viewBox: "0 0 24 24" } as const;
export default TableCellsSplit;
