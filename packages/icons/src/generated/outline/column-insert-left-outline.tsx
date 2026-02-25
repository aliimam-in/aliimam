/**
 * Auto-generated logo component: Column Insert Left Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ColumnInsertLeftOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ColumnInsertLeftOutlineLogo = React.forwardRef<SVGSVGElement, ColumnInsertLeftOutlineLogoProps>(
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
      <path d="M14 4h4a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1v-14a1 1 0 0 1 1 -1" />
  <path d="M5 12l4 0" />
  <path d="M7 10l0 4" />
    </svg>
  )
);

ColumnInsertLeftOutlineLogo.displayName = "ColumnInsertLeftOutlineLogo";

export const ColumnInsertLeftOutlineLogoMetadata = {
  id: "column-insert-left-outline",
  baseId: "column-insert-left-outline",
  variant: "default",
  name: "Column Insert Left Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ColumnInsertLeftOutlineLogo;
