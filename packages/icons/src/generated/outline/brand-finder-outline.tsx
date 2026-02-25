/**
 * Auto-generated logo component: Brand Finder Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandFinderOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandFinderOutlineLogo = React.forwardRef<SVGSVGElement, BrandFinderOutlineLogoProps>(
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
      <path d="M3 5a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1l0 -14" />
  <path d="M7 8v1" />
  <path d="M17 8v1" />
  <path d="M12.5 4c-.654 1.486 -1.26 3.443 -1.5 9h2.5c-.19 2.867 .094 5.024 .5 7" />
  <path d="M7 15.5c3.667 2 6.333 2 10 0" />
    </svg>
  )
);

BrandFinderOutlineLogo.displayName = "BrandFinderOutlineLogo";

export const BrandFinderOutlineLogoMetadata = {
  id: "brand-finder-outline",
  baseId: "brand-finder-outline",
  variant: "default",
  name: "Brand Finder Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandFinderOutlineLogo;
