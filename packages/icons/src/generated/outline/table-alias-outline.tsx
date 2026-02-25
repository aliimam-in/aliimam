/**
 * Auto-generated logo component: Table Alias Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface TableAliasOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const TableAliasOutlineLogo = React.forwardRef<SVGSVGElement, TableAliasOutlineLogoProps>(
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
      <path d="M3 12v-7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-7" />
  <path d="M3 10h18" />
  <path d="M10 3v10" />
  <path d="M2 17a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1v-4" />
    </svg>
  )
);

TableAliasOutlineLogo.displayName = "TableAliasOutlineLogo";

export const TableAliasOutlineLogoMetadata = {
  id: "table-alias-outline",
  baseId: "table-alias-outline",
  variant: "default",
  name: "Table Alias Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default TableAliasOutlineLogo;
