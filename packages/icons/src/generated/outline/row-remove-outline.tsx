/**
 * Auto-generated logo component: Row Remove Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface RowRemoveOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const RowRemoveOutlineLogo = React.forwardRef<SVGSVGElement, RowRemoveOutlineLogoProps>(
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
      <path d="M20 6v4a1 1 0 0 1 -1 1h-14a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h14a1 1 0 0 1 1 1" />
  <path d="M10 16l4 4" />
  <path d="M10 20l4 -4" />
    </svg>
  )
);

RowRemoveOutlineLogo.displayName = "RowRemoveOutlineLogo";

export const RowRemoveOutlineLogoMetadata = {
  id: "row-remove-outline",
  baseId: "row-remove-outline",
  variant: "default",
  name: "Row Remove Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default RowRemoveOutlineLogo;
