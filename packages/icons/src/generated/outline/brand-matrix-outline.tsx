/**
 * Auto-generated logo component: Brand Matrix Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandMatrixOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandMatrixOutlineLogo = React.forwardRef<SVGSVGElement, BrandMatrixOutlineLogoProps>(
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
      <path d="M4 3h-1v18h1" />
  <path d="M20 21h1v-18h-1" />
  <path d="M7 9v6" />
  <path d="M12 15v-3.5a2.5 2.5 0 1 0 -5 0v.5" />
  <path d="M17 15v-3.5a2.5 2.5 0 1 0 -5 0v.5" />
    </svg>
  )
);

BrandMatrixOutlineLogo.displayName = "BrandMatrixOutlineLogo";

export const BrandMatrixOutlineLogoMetadata = {
  id: "brand-matrix-outline",
  baseId: "brand-matrix-outline",
  variant: "default",
  name: "Brand Matrix Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandMatrixOutlineLogo;
