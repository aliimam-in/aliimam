/**
 * Auto-generated logo component: Table Cells Merge (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface TableCellsMergeLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const TableCellsMergeLogo = React.forwardRef<SVGSVGElement, TableCellsMergeLogoProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...(strokeWidth !== undefined ? { strokeWidth } : {})}
      {...props}
    >
      <path d="M12 21v-6" />
  <path d="M12 9V3" />
  <path d="M3 15h18" />
  <path d="M3 9h18" />
  <rect width="18" height="18" x="3" y="3" rx="2" />
    </svg>
  )
);

TableCellsMergeLogo.displayName = "TableCellsMergeLogo";

export const TableCellsMergeLogoMetadata = {
  id: "table-cells-merge",
  baseId: "table-cells-merge",
  variant: "default",
  name: "Table Cells Merge",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default TableCellsMergeLogo;
