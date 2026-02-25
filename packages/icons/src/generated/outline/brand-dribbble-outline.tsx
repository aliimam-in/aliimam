/**
 * Auto-generated logo component: Brand Dribbble Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandDribbbleOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandDribbbleOutlineLogo = React.forwardRef<SVGSVGElement, BrandDribbbleOutlineLogoProps>(
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
      <path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
  <path d="M9 3.6c5 6 7 10.5 7.5 16.2" />
  <path d="M6.4 19c3.5 -3.5 6 -6.5 14.5 -6.4" />
  <path d="M3.1 10.75c5 0 9.814 -.38 15.314 -5" />
    </svg>
  )
);

BrandDribbbleOutlineLogo.displayName = "BrandDribbbleOutlineLogo";

export const BrandDribbbleOutlineLogoMetadata = {
  id: "brand-dribbble-outline",
  baseId: "brand-dribbble-outline",
  variant: "default",
  name: "Brand Dribbble Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandDribbbleOutlineLogo;
