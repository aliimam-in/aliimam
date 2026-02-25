/**
 * Auto-generated logo component: Brand Onlyfans Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandOnlyfansOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandOnlyfansOutlineLogo = React.forwardRef<SVGSVGElement, BrandOnlyfansOutlineLogoProps>(
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
      <path d="M8.5 6a6.5 6.5 0 1 0 0 13a6.5 6.5 0 0 0 0 -13" />
  <path d="M8.5 15a2.5 2.5 0 1 1 0 -5a2.5 2.5 0 0 1 0 5" />
  <path d="M14 16c2.5 0 6.42 -1.467 7 -4h-6c3 -1 6.44 -3.533 7 -6h-4c-3.03 0 -3.764 -.196 -5 1.5" />
    </svg>
  )
);

BrandOnlyfansOutlineLogo.displayName = "BrandOnlyfansOutlineLogo";

export const BrandOnlyfansOutlineLogoMetadata = {
  id: "brand-onlyfans-outline",
  baseId: "brand-onlyfans-outline",
  variant: "default",
  name: "Brand Onlyfans Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandOnlyfansOutlineLogo;
