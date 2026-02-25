/**
 * Auto-generated logo component: Brand Bunpo Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandBunpoOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandBunpoOutlineLogo = React.forwardRef<SVGSVGElement, BrandBunpoOutlineLogoProps>(
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
      <path d="M3.9 7.205a17.764 17.764 0 0 0 4.008 2.753a7.917 7.917 0 0 0 4.57 .567c1.5 -.33 2.907 -1 4.121 -1.956a12.107 12.107 0 0 0 2.892 -2.903c.603 -.94 .745 -1.766 .484 -2.231c-.261 -.465 -.927 -.568 -1.72 -.257a7.564 7.564 0 0 0 -2.608 2.034a18.425 18.425 0 0 0 -2.588 3.884a34.927 34.927 0 0 0 -2.093 5.073a12.908 12.908 0 0 0 -.677 3.515c-.07 .752 .07 1.51 .405 2.184c.323 .562 1.06 1.132 2.343 1.132c3.474 0 5.093 -3.53 5.463 -5.62c.24 -1.365 -.085 -3.197 -1.182 -4.01" />
    </svg>
  )
);

BrandBunpoOutlineLogo.displayName = "BrandBunpoOutlineLogo";

export const BrandBunpoOutlineLogoMetadata = {
  id: "brand-bunpo-outline",
  baseId: "brand-bunpo-outline",
  variant: "default",
  name: "Brand Bunpo Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandBunpoOutlineLogo;
