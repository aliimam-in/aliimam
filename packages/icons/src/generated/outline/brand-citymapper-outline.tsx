/**
 * Auto-generated logo component: Brand Citymapper Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandCitymapperOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandCitymapperOutlineLogo = React.forwardRef<SVGSVGElement, BrandCitymapperOutlineLogoProps>(
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
      <path d="M3 11a1 1 0 1 1 -1 1.013a1 1 0 0 1 1 -1v-.013" />
  <path d="M21 11a1 1 0 1 1 -1 1.013a1 1 0 0 1 1 -1v-.013" />
  <path d="M8 12h8" />
  <path d="M13 9l3 3l-3 3" />
    </svg>
  )
);

BrandCitymapperOutlineLogo.displayName = "BrandCitymapperOutlineLogo";

export const BrandCitymapperOutlineLogoMetadata = {
  id: "brand-citymapper-outline",
  baseId: "brand-citymapper-outline",
  variant: "default",
  name: "Brand Citymapper Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandCitymapperOutlineLogo;
