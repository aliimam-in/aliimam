/**
 * Auto-generated logo component: Table Cells Split (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface TableCellsSplitLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const TableCellsSplitLogo = React.forwardRef<SVGSVGElement, TableCellsSplitLogoProps>(
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
      <path d="M12 15V9" />
  <path d="M3 15h18" />
  <path d="M3 9h18" />
  <rect width="18" height="18" x="3" y="3" rx="2" />
    </svg>
  )
);

TableCellsSplitLogo.displayName = "TableCellsSplitLogo";

export const TableCellsSplitLogoMetadata = {
  id: "table-cells-split",
  baseId: "table-cells-split",
  variant: "default",
  name: "Table Cells Split",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default TableCellsSplitLogo;
