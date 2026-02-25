/**
 * Auto-generated logo component: Table Dashed Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface TableDashedOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const TableDashedOutlineLogo = React.forwardRef<SVGSVGElement, TableDashedOutlineLogoProps>(
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
      <path d="M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2l0 -14" />
  <path d="M3 10h18" />
  <path d="M10 3v18" />
    </svg>
  )
);

TableDashedOutlineLogo.displayName = "TableDashedOutlineLogo";

export const TableDashedOutlineLogoMetadata = {
  id: "table-dashed-outline",
  baseId: "table-dashed-outline",
  variant: "default",
  name: "Table Dashed Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default TableDashedOutlineLogo;
