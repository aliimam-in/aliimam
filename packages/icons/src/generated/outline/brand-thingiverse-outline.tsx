/**
 * Auto-generated logo component: Brand Thingiverse Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandThingiverseOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandThingiverseOutlineLogo = React.forwardRef<SVGSVGElement, BrandThingiverseOutlineLogoProps>(
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
  <path d="M8 9h8m-4 0v8" />
    </svg>
  )
);

BrandThingiverseOutlineLogo.displayName = "BrandThingiverseOutlineLogo";

export const BrandThingiverseOutlineLogoMetadata = {
  id: "brand-thingiverse-outline",
  baseId: "brand-thingiverse-outline",
  variant: "default",
  name: "Brand Thingiverse Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandThingiverseOutlineLogo;
