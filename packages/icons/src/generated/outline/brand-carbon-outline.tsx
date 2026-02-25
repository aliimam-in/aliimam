/**
 * Auto-generated logo component: Brand Carbon Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandCarbonOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandCarbonOutlineLogo = React.forwardRef<SVGSVGElement, BrandCarbonOutlineLogoProps>(
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
      <path d="M14 10v-.2a1.8 1.8 0 0 0 -1.8 -1.8h-.4a1.8 1.8 0 0 0 -1.8 1.8v4.4a1.8 1.8 0 0 0 1.8 1.8h.4a1.8 1.8 0 0 0 1.8 -1.8v-.2" />
  <path d="M3 6a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3v-12" />
    </svg>
  )
);

BrandCarbonOutlineLogo.displayName = "BrandCarbonOutlineLogo";

export const BrandCarbonOutlineLogoMetadata = {
  id: "brand-carbon-outline",
  baseId: "brand-carbon-outline",
  variant: "default",
  name: "Brand Carbon Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandCarbonOutlineLogo;
