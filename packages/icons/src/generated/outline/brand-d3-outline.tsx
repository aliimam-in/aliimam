/**
 * Auto-generated logo component: Brand D3 Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandD3OutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandD3OutlineLogo = React.forwardRef<SVGSVGElement, BrandD3OutlineLogoProps>(
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
      <path d="M3 4h1.8c3.976 0 7.2 3.582 7.2 8s-3.224 8 -7.2 8h-1.8" />
  <path d="M12 4h5.472c1.948 0 3.528 1.79 3.528 4s-1.58 4 -3.528 4" />
  <path d="M17.472 12h-2.472" />
  <path d="M17.472 12h-2.352" />
  <path d="M17.472 12c1.948 0 3.528 1.79 3.528 4s-1.58 4 -3.528 4h-5.472" />
    </svg>
  )
);

BrandD3OutlineLogo.displayName = "BrandD3OutlineLogo";

export const BrandD3OutlineLogoMetadata = {
  id: "brand-d3-outline",
  baseId: "brand-d3-outline",
  variant: "default",
  name: "Brand D3 Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandD3OutlineLogo;
