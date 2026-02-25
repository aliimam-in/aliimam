/**
 * Auto-generated logo component: Table Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface TableOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const TableOffOutlineLogo = React.forwardRef<SVGSVGElement, TableOffOutlineLogoProps>(
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
      <path d="M7 3h12a2 2 0 0 1 2 2v12m-.585 3.413a1.994 1.994 0 0 1 -1.415 .587h-14a2 2 0 0 1 -2 -2v-14c0 -.55 .223 -1.05 .583 -1.412" />
  <path d="M3 10h7m4 0h7" />
  <path d="M10 3v3m0 4v11" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

TableOffOutlineLogo.displayName = "TableOffOutlineLogo";

export const TableOffOutlineLogoMetadata = {
  id: "table-off-outline",
  baseId: "table-off-outline",
  variant: "default",
  name: "Table Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default TableOffOutlineLogo;
