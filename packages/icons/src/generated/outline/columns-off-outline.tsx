/**
 * Auto-generated logo component: Columns Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ColumnsOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ColumnsOffOutlineLogo = React.forwardRef<SVGSVGElement, ColumnsOffOutlineLogoProps>(
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
      <path d="M4 6h2" />
  <path d="M4 10h5.5" />
  <path d="M4 14h5.5" />
  <path d="M4 18h5.5" />
  <path d="M14.5 6h5.5" />
  <path d="M14.5 10h5.5" />
  <path d="M18 14h2" />
  <path d="M14.5 18h3.5" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

ColumnsOffOutlineLogo.displayName = "ColumnsOffOutlineLogo";

export const ColumnsOffOutlineLogoMetadata = {
  id: "columns-off-outline",
  baseId: "columns-off-outline",
  variant: "default",
  name: "Columns Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ColumnsOffOutlineLogo;
