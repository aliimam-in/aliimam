/**
 * Auto-generated logo component: Row Insert Top Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface RowInsertTopOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const RowInsertTopOutlineLogo = React.forwardRef<SVGSVGElement, RowInsertTopOutlineLogoProps>(
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
      <path d="M4 18v-4a1 1 0 0 1 1 -1h14a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-14a1 1 0 0 1 -1 -1" />
  <path d="M12 9v-4" />
  <path d="M10 7l4 0" />
    </svg>
  )
);

RowInsertTopOutlineLogo.displayName = "RowInsertTopOutlineLogo";

export const RowInsertTopOutlineLogoMetadata = {
  id: "row-insert-top-outline",
  baseId: "row-insert-top-outline",
  variant: "default",
  name: "Row Insert Top Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default RowInsertTopOutlineLogo;
