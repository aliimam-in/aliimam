/**
 * Auto-generated logo component: Brand Picsart Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandPicsartOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandPicsartOutlineLogo = React.forwardRef<SVGSVGElement, BrandPicsartOutlineLogoProps>(
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
      <path d="M5 9a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
  <path d="M9 9a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
  <path d="M5 9v11a2 2 0 1 0 4 0v-4.5" />
    </svg>
  )
);

BrandPicsartOutlineLogo.displayName = "BrandPicsartOutlineLogo";

export const BrandPicsartOutlineLogoMetadata = {
  id: "brand-picsart-outline",
  baseId: "brand-picsart-outline",
  variant: "default",
  name: "Brand Picsart Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandPicsartOutlineLogo;
