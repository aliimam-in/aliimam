/**
 * Auto-generated logo component: Brand Planetscale Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandPlanetscaleOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandPlanetscaleOutlineLogo = React.forwardRef<SVGSVGElement, BrandPlanetscaleOutlineLogoProps>(
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
      <path d="M20.993 11.63a9 9 0 0 1 -9.362 9.362l9.362 -9.362" />
  <path d="M12 3a9.001 9.001 0 0 1 8.166 5.211l-11.955 11.955a9 9 0 0 1 3.789 -17.166" />
  <path d="M12 12l-6 6" />
    </svg>
  )
);

BrandPlanetscaleOutlineLogo.displayName = "BrandPlanetscaleOutlineLogo";

export const BrandPlanetscaleOutlineLogoMetadata = {
  id: "brand-planetscale-outline",
  baseId: "brand-planetscale-outline",
  variant: "default",
  name: "Brand Planetscale Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandPlanetscaleOutlineLogo;
