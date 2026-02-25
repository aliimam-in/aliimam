/**
 * Auto-generated logo component: Brand Tiktok Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandTiktokOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandTiktokOutlineLogo = React.forwardRef<SVGSVGElement, BrandTiktokOutlineLogoProps>(
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
      <path d="M21 7.917v4.034a9.948 9.948 0 0 1 -5 -1.951v4.5a6.5 6.5 0 1 1 -8 -6.326v4.326a2.5 2.5 0 1 0 4 2v-11.5h4.083a6.005 6.005 0 0 0 4.917 4.917" />
    </svg>
  )
);

BrandTiktokOutlineLogo.displayName = "BrandTiktokOutlineLogo";

export const BrandTiktokOutlineLogoMetadata = {
  id: "brand-tiktok-outline",
  baseId: "brand-tiktok-outline",
  variant: "default",
  name: "Brand Tiktok Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandTiktokOutlineLogo;
