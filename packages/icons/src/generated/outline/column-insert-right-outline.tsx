/**
 * Auto-generated logo component: Column Insert Right Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ColumnInsertRightOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ColumnInsertRightOutlineLogo = React.forwardRef<SVGSVGElement, ColumnInsertRightOutlineLogoProps>(
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
      <path d="M6 4h4a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1v-14a1 1 0 0 1 1 -1" />
  <path d="M15 12l4 0" />
  <path d="M17 10l0 4" />
    </svg>
  )
);

ColumnInsertRightOutlineLogo.displayName = "ColumnInsertRightOutlineLogo";

export const ColumnInsertRightOutlineLogoMetadata = {
  id: "column-insert-right-outline",
  baseId: "column-insert-right-outline",
  variant: "default",
  name: "Column Insert Right Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ColumnInsertRightOutlineLogo;
