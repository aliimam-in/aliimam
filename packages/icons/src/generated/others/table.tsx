/**
 * Auto-generated logo component: Table (default)
 * Category: others
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
      <path d="M12 3v18" />
  <rect width="18" height="18" x="3" y="3" rx="2" />
  <path d="M3 9h18" />
  <path d="M3 15h18" />
    </svg>
  )
);

TableLogo.displayName = "TableLogo";

export const TableLogoMetadata = {
  id: "table",
  baseId: "table",
  variant: "default",
  name: "Table",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default TableLogo;
