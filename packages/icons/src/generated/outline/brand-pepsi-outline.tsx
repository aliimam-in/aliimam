/**
 * Auto-generated logo component: Brand Pepsi Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandPepsiOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandPepsiOutlineLogo = React.forwardRef<SVGSVGElement, BrandPepsiOutlineLogoProps>(
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
  <path d="M4 16c5.713 -2.973 11 -3.5 13.449 -11.162" />
  <path d="M5 17.5c5.118 -2.859 15 0 14 -11" />
    </svg>
  )
);

BrandPepsiOutlineLogo.displayName = "BrandPepsiOutlineLogo";

export const BrandPepsiOutlineLogoMetadata = {
  id: "brand-pepsi-outline",
  baseId: "brand-pepsi-outline",
  variant: "default",
  name: "Brand Pepsi Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandPepsiOutlineLogo;
