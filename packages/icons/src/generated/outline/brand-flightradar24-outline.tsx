/**
 * Auto-generated logo component: Brand Flightradar24 Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandFlightradar24OutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandFlightradar24OutlineLogo = React.forwardRef<SVGSVGElement, BrandFlightradar24OutlineLogoProps>(
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
  <path d="M7 12a5 5 0 1 0 10 0a5 5 0 1 0 -10 0" />
  <path d="M8.5 20l3.5 -8l-6.5 6" />
  <path d="M11 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
    </svg>
  )
);

BrandFlightradar24OutlineLogo.displayName = "BrandFlightradar24OutlineLogo";

export const BrandFlightradar24OutlineLogoMetadata = {
  id: "brand-flightradar24-outline",
  baseId: "brand-flightradar24-outline",
  variant: "default",
  name: "Brand Flightradar24 Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandFlightradar24OutlineLogo;
