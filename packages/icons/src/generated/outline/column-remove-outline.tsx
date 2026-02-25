/**
 * Auto-generated logo component: Column Remove Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ColumnRemoveOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ColumnRemoveOutlineLogo = React.forwardRef<SVGSVGElement, ColumnRemoveOutlineLogoProps>(
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
  <path d="M16 10l4 4" />
  <path d="M16 14l4 -4" />
    </svg>
  )
);

ColumnRemoveOutlineLogo.displayName = "ColumnRemoveOutlineLogo";

export const ColumnRemoveOutlineLogoMetadata = {
  id: "column-remove-outline",
  baseId: "column-remove-outline",
  variant: "default",
  name: "Column Remove Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ColumnRemoveOutlineLogo;
