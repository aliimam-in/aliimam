/**
 * Auto-generated logo component: Brand Couchsurfing Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandCouchsurfingOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandCouchsurfingOutlineLogo = React.forwardRef<SVGSVGElement, BrandCouchsurfingOutlineLogoProps>(
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
      <path d="M3.1 13c3.267 0 5.9 -.167 7.9 -.5c3 -.5 4 -2 4 -3.5a3 3 0 1 0 -6 0c0 1.554 1.807 3 3 4c1.193 1 2 2.5 2 3.5a1.5 1.5 0 1 1 -3 0c0 -2 4 -3.5 7 -3.5h2.9" />
  <path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
    </svg>
  )
);

BrandCouchsurfingOutlineLogo.displayName = "BrandCouchsurfingOutlineLogo";

export const BrandCouchsurfingOutlineLogoMetadata = {
  id: "brand-couchsurfing-outline",
  baseId: "brand-couchsurfing-outline",
  variant: "default",
  name: "Brand Couchsurfing Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandCouchsurfingOutlineLogo;
