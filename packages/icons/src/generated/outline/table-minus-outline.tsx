/**
 * Auto-generated logo component: Table Minus Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface TableMinusOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const TableMinusOutlineLogo = React.forwardRef<SVGSVGElement, TableMinusOutlineLogoProps>(
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
      <path d="M12.5 21h-7.5a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10" />
  <path d="M3 10h18" />
  <path d="M10 3v18" />
  <path d="M16 19h6" />
    </svg>
  )
);

TableMinusOutlineLogo.displayName = "TableMinusOutlineLogo";

export const TableMinusOutlineLogoMetadata = {
  id: "table-minus-outline",
  baseId: "table-minus-outline",
  variant: "default",
  name: "Table Minus Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default TableMinusOutlineLogo;
