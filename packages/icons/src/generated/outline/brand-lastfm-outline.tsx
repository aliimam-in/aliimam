/**
 * Auto-generated logo component: Brand Lastfm Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandLastfmOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandLastfmOutlineLogo = React.forwardRef<SVGSVGElement, BrandLastfmOutlineLogoProps>(
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
      <path d="M20 8c-.83 -1 -1.388 -1 -2 -1c-.612 0 -2 .271 -2 2s1.384 2.233 3 3c1.616 .767 2.125 1.812 2 3s-1 2 -3 2s-3 -1 -3.5 -2s-1.585 -4.78 -2.497 -6a5 5 0 1 0 -1 7" />
    </svg>
  )
);

BrandLastfmOutlineLogo.displayName = "BrandLastfmOutlineLogo";

export const BrandLastfmOutlineLogoMetadata = {
  id: "brand-lastfm-outline",
  baseId: "brand-lastfm-outline",
  variant: "default",
  name: "Brand Lastfm Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandLastfmOutlineLogo;
