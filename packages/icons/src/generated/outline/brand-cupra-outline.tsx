/**
 * Auto-generated logo component: Brand Cupra Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandCupraOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandCupraOutlineLogo = React.forwardRef<SVGSVGElement, BrandCupraOutlineLogoProps>(
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
      <path d="M4.5 10l-2.5 -4l15.298 6.909a.2 .2 0 0 1 .09 .283l-3.388 5.808" />
  <path d="M10 19l-3.388 -5.808a.2 .2 0 0 1 .09 -.283l15.298 -6.909l-2.5 4" />
    </svg>
  )
);

BrandCupraOutlineLogo.displayName = "BrandCupraOutlineLogo";

export const BrandCupraOutlineLogoMetadata = {
  id: "brand-cupra-outline",
  baseId: "brand-cupra-outline",
  variant: "default",
  name: "Brand Cupra Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandCupraOutlineLogo;
