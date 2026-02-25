/**
 * Auto-generated logo component: Table Row Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface TableRowOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const TableRowOutlineLogo = React.forwardRef<SVGSVGElement, TableRowOutlineLogoProps>(
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
      <path d="M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14" />
  <path d="M9 3l-6 6" />
  <path d="M14 3l-7 7" />
  <path d="M19 3l-7 7" />
  <path d="M21 6l-4 4" />
  <path d="M3 10h18" />
  <path d="M10 10v11" />
    </svg>
  )
);

TableRowOutlineLogo.displayName = "TableRowOutlineLogo";

export const TableRowOutlineLogoMetadata = {
  id: "table-row-outline",
  baseId: "table-row-outline",
  variant: "default",
  name: "Table Row Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default TableRowOutlineLogo;
