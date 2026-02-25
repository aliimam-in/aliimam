/**
 * Auto-generated logo component: Brand Zwift Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandZwiftOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandZwiftOutlineLogo = React.forwardRef<SVGSVGElement, BrandZwiftOutlineLogoProps>(
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
      <path d="M5.5 4c-1.465 0 -2.5 1.101 -2.5 2.5s1.035 2.5 2.5 2.5h2.5l-4.637 7.19a2.434 2.434 0 0 0 -.011 2.538c.473 .787 1.35 1.272 2.3 1.272h10.848c1.465 0 2.5 -1.101 2.5 -2.5s-1.035 -2.5 -2.5 -2.5h-2.5l7 -11h-15.5" />
    </svg>
  )
);

BrandZwiftOutlineLogo.displayName = "BrandZwiftOutlineLogo";

export const BrandZwiftOutlineLogoMetadata = {
  id: "brand-zwift-outline",
  baseId: "brand-zwift-outline",
  variant: "default",
  name: "Brand Zwift Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandZwiftOutlineLogo;
