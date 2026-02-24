/**
 * Auto-generated logo component: Table (default)
 * Category: feather
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface TableLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const TableLogo = React.forwardRef<SVGSVGElement, TableLogoProps>(
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
      <path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18"/>
    </svg>
  )
);

TableLogo.displayName = "TableLogo";

export const TableLogoMetadata = {
  id: "table",
  baseId: "table",
  variant: "default",
  name: "Table",
  category: "feather",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default TableLogo;
