/**
 * Auto-generated logo component: Table Export Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface TableExportOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const TableExportOutlineLogo = React.forwardRef<SVGSVGElement, TableExportOutlineLogoProps>(
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
      <path d="M12.5 21h-7.5a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v7.5" />
  <path d="M3 10h18" />
  <path d="M10 3v18" />
  <path d="M16 19h6" />
  <path d="M19 16l3 3l-3 3" />
    </svg>
  )
);

TableExportOutlineLogo.displayName = "TableExportOutlineLogo";

export const TableExportOutlineLogoMetadata = {
  id: "table-export-outline",
  baseId: "table-export-outline",
  variant: "default",
  name: "Table Export Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default TableExportOutlineLogo;
