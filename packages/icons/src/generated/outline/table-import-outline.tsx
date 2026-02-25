/**
 * Auto-generated logo component: Table Import Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface TableImportOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const TableImportOutlineLogo = React.forwardRef<SVGSVGElement, TableImportOutlineLogoProps>(
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
      <path d="M12 21h-7a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v8" />
  <path d="M3 10h18" />
  <path d="M10 3v18" />
  <path d="M19 22v-6" />
  <path d="M22 19l-3 -3l-3 3" />
    </svg>
  )
);

TableImportOutlineLogo.displayName = "TableImportOutlineLogo";

export const TableImportOutlineLogoMetadata = {
  id: "table-import-outline",
  baseId: "table-import-outline",
  variant: "default",
  name: "Table Import Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default TableImportOutlineLogo;
