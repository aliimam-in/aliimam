/**
 * Auto-generated logo component: Brand Solidjs Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandSolidjsOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandSolidjsOutlineLogo = React.forwardRef<SVGSVGElement, BrandSolidjsOutlineLogoProps>(
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
      <path d="M2 17.5c4.667 3 8 4.5 10 4.5c2.5 0 4 -1.5 4 -3.5s-1.5 -3.5 -4 -3.5c-2 0 -5.333 .833 -10 2.5" />
  <path d="M5 13.5c4.667 -1.667 8 -2.5 10 -2.5c2.5 0 4 1.5 4 3.5c0 .738 -.204 1.408 -.588 1.96l-2.883 3.825" />
  <path d="M22 6.5c-4 -3 -8 -4.5 -10 -4.5c-2.04 0 -2.618 .463 -3.419 1.545" />
  <path d="M2 17.5l3 -4" />
  <path d="M22 6.5l-3 4" />
  <path d="M8.581 3.545l-2.953 3.711" />
  <path d="M7.416 12.662c-1.51 -.476 -2.416 -1.479 -2.416 -3.162c0 -2.5 1.5 -3.5 4 -3.5c1.688 0 5.087 1.068 8.198 3.204a114.76 114.76 0 0 1 1.802 1.296l-2.302 .785" />
    </svg>
  )
);

BrandSolidjsOutlineLogo.displayName = "BrandSolidjsOutlineLogo";

export const BrandSolidjsOutlineLogoMetadata = {
  id: "brand-solidjs-outline",
  baseId: "brand-solidjs-outline",
  variant: "default",
  name: "Brand Solidjs Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandSolidjsOutlineLogo;
