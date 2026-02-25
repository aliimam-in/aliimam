/**
 * Auto-generated logo component: Columns Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ColumnsOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ColumnsOutlineLogo = React.forwardRef<SVGSVGElement, ColumnsOutlineLogoProps>(
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
      <path d="M4 6l5.5 0" />
  <path d="M4 10l5.5 0" />
  <path d="M4 14l5.5 0" />
  <path d="M4 18l5.5 0" />
  <path d="M14.5 6l5.5 0" />
  <path d="M14.5 10l5.5 0" />
  <path d="M14.5 14l5.5 0" />
  <path d="M14.5 18l5.5 0" />
    </svg>
  )
);

ColumnsOutlineLogo.displayName = "ColumnsOutlineLogo";

export const ColumnsOutlineLogoMetadata = {
  id: "columns-outline",
  baseId: "columns-outline",
  variant: "default",
  name: "Columns Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ColumnsOutlineLogo;
