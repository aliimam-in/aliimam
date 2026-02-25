/**
 * Auto-generated logo component: Brand Bulma Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandBulmaOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandBulmaOutlineLogo = React.forwardRef<SVGSVGElement, BrandBulmaOutlineLogoProps>(
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
      <path d="M5 16l1 -9l5 -5l6.5 6l-3.5 4l5 5l-8 5l-6 -6" />
    </svg>
  )
);

BrandBulmaOutlineLogo.displayName = "BrandBulmaOutlineLogo";

export const BrandBulmaOutlineLogoMetadata = {
  id: "brand-bulma-outline",
  baseId: "brand-bulma-outline",
  variant: "default",
  name: "Brand Bulma Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandBulmaOutlineLogo;
