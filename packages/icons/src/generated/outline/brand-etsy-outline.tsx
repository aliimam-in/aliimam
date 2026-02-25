/**
 * Auto-generated logo component: Brand Etsy Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandEtsyOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandEtsyOutlineLogo = React.forwardRef<SVGSVGElement, BrandEtsyOutlineLogoProps>(
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
      <path d="M14 12h-5" />
  <path d="M3 8a5 5 0 0 1 5 -5h8a5 5 0 0 1 5 5v8a5 5 0 0 1 -5 5h-8a5 5 0 0 1 -5 -5l0 -8" />
  <path d="M15 16h-5a1 1 0 0 1 -1 -1v-6a1 1 0 0 1 1 -1h5" />
    </svg>
  )
);

BrandEtsyOutlineLogo.displayName = "BrandEtsyOutlineLogo";

export const BrandEtsyOutlineLogoMetadata = {
  id: "brand-etsy-outline",
  baseId: "brand-etsy-outline",
  variant: "default",
  name: "Brand Etsy Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandEtsyOutlineLogo;
