/**
 * Auto-generated logo component: Brand Bandcamp Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandBandcampOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandBandcampOutlineLogo = React.forwardRef<SVGSVGElement, BrandBandcampOutlineLogoProps>(
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
      <path d="M8.5 6h13.5l-7 12h-13l6.5 -12" />
    </svg>
  )
);

BrandBandcampOutlineLogo.displayName = "BrandBandcampOutlineLogo";

export const BrandBandcampOutlineLogoMetadata = {
  id: "brand-bandcamp-outline",
  baseId: "brand-bandcamp-outline",
  variant: "default",
  name: "Brand Bandcamp Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandBandcampOutlineLogo;
