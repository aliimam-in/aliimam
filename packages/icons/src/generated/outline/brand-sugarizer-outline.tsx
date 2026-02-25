/**
 * Auto-generated logo component: Brand Sugarizer Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandSugarizerOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandSugarizerOutlineLogo = React.forwardRef<SVGSVGElement, BrandSugarizerOutlineLogoProps>(
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
      <path d="M14.277 16l3.252 -3.252a1.61 1.61 0 0 0 -2.277 -2.276l-3.252 3.251l-3.252 -3.251a1.61 1.61 0 0 0 -2.276 2.276l3.251 3.252l-3.251 3.252a1.61 1.61 0 1 0 2.276 2.277l3.252 -3.252l3.252 3.252a1.61 1.61 0 1 0 2.277 -2.277l-3.252 -3.252" />
  <path d="M9 5a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
    </svg>
  )
);

BrandSugarizerOutlineLogo.displayName = "BrandSugarizerOutlineLogo";

export const BrandSugarizerOutlineLogoMetadata = {
  id: "brand-sugarizer-outline",
  baseId: "brand-sugarizer-outline",
  variant: "default",
  name: "Brand Sugarizer Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandSugarizerOutlineLogo;
