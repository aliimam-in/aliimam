/**
 * Auto-generated logo component: Brand Pinterest Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandPinterestOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandPinterestOutlineLogo = React.forwardRef<SVGSVGElement, BrandPinterestOutlineLogoProps>(
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
      <path d="M8 20l4 -9" />
  <path d="M10.7 14c.437 1.263 1.43 2 2.55 2c2.071 0 3.75 -1.554 3.75 -4a5 5 0 1 0 -9.7 1.7" />
  <path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
    </svg>
  )
);

BrandPinterestOutlineLogo.displayName = "BrandPinterestOutlineLogo";

export const BrandPinterestOutlineLogoMetadata = {
  id: "brand-pinterest-outline",
  baseId: "brand-pinterest-outline",
  variant: "default",
  name: "Brand Pinterest Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandPinterestOutlineLogo;
