/**
 * Auto-generated logo component: Table Column Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface TableColumnOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const TableColumnOutlineLogo = React.forwardRef<SVGSVGElement, TableColumnOutlineLogoProps>(
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
  <path d="M10 10h11" />
  <path d="M10 3v18" />
  <path d="M9 3l-6 6" />
  <path d="M10 7l-7 7" />
  <path d="M10 12l-7 7" />
  <path d="M10 17l-4 4" />
    </svg>
  )
);

TableColumnOutlineLogo.displayName = "TableColumnOutlineLogo";

export const TableColumnOutlineLogoMetadata = {
  id: "table-column-outline",
  baseId: "table-column-outline",
  variant: "default",
  name: "Table Column Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default TableColumnOutlineLogo;
