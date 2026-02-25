/**
 * Auto-generated logo component: Brand Loom Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandLoomOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandLoomOutlineLogo = React.forwardRef<SVGSVGElement, BrandLoomOutlineLogoProps>(
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
      <path d="M17.464 6.518a6 6 0 1 0 -3.023 7.965" />
  <path d="M17.482 17.464a6 6 0 1 0 -7.965 -3.023" />
  <path d="M6.54 17.482a6 6 0 1 0 3.024 -7.965" />
  <path d="M6.518 6.54a6 6 0 1 0 7.965 3.024" />
    </svg>
  )
);

BrandLoomOutlineLogo.displayName = "BrandLoomOutlineLogo";

export const BrandLoomOutlineLogoMetadata = {
  id: "brand-loom-outline",
  baseId: "brand-loom-outline",
  variant: "default",
  name: "Brand Loom Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandLoomOutlineLogo;
