/**
 * Auto-generated logo component: Brand Zoom Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandZoomOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandZoomOutlineLogo = React.forwardRef<SVGSVGElement, BrandZoomOutlineLogoProps>(
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
      <path d="M17.011 9.385v5.128l3.989 3.487v-12l-3.989 3.385" />
  <path d="M3.887 6h10.08c1.468 0 3.033 1.203 3.033 2.803v8.196a.991 .991 0 0 1 -.975 1h-10.373c-1.667 0 -2.652 -1.5 -2.652 -3l.01 -8a.882 .882 0 0 1 .208 -.71a.841 .841 0 0 1 .67 -.287l-.001 -.002" />
    </svg>
  )
);

BrandZoomOutlineLogo.displayName = "BrandZoomOutlineLogo";

export const BrandZoomOutlineLogoMetadata = {
  id: "brand-zoom-outline",
  baseId: "brand-zoom-outline",
  variant: "default",
  name: "Brand Zoom Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandZoomOutlineLogo;
