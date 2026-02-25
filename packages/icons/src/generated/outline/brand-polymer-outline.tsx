/**
 * Auto-generated logo component: Brand Polymer Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandPolymerOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandPolymerOutlineLogo = React.forwardRef<SVGSVGElement, BrandPolymerOutlineLogoProps>(
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
      <path d="M6.706 6l-3.706 6l3.706 6h1.059l8.47 -12h1.06l3.705 6l-3.706 6" />
    </svg>
  )
);

BrandPolymerOutlineLogo.displayName = "BrandPolymerOutlineLogo";

export const BrandPolymerOutlineLogoMetadata = {
  id: "brand-polymer-outline",
  baseId: "brand-polymer-outline",
  variant: "default",
  name: "Brand Polymer Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandPolymerOutlineLogo;
