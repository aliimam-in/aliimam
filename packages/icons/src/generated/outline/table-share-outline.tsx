/**
 * Auto-generated logo component: Table Share Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface TableShareOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const TableShareOutlineLogo = React.forwardRef<SVGSVGElement, TableShareOutlineLogoProps>(
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
  <path d="M16 22l5 -5" />
  <path d="M21 21.5v-4.5h-4.5" />
    </svg>
  )
);

TableShareOutlineLogo.displayName = "TableShareOutlineLogo";

export const TableShareOutlineLogoMetadata = {
  id: "table-share-outline",
  baseId: "table-share-outline",
  variant: "default",
  name: "Table Share Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default TableShareOutlineLogo;
