/**
 * Auto-generated logo component: Brand National Geographic Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandNationalGeographicOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandNationalGeographicOutlineLogo = React.forwardRef<SVGSVGElement, BrandNationalGeographicOutlineLogoProps>(
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
      <path d="M7 3h10v18h-10l0 -18" />
    </svg>
  )
);

BrandNationalGeographicOutlineLogo.displayName = "BrandNationalGeographicOutlineLogo";

export const BrandNationalGeographicOutlineLogoMetadata = {
  id: "brand-national-geographic-outline",
  baseId: "brand-national-geographic-outline",
  variant: "default",
  name: "Brand National Geographic Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandNationalGeographicOutlineLogo;
