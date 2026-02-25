/**
 * Auto-generated logo component: Brand Tabnine Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandTabnineOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandTabnineOutlineLogo = React.forwardRef<SVGSVGElement, BrandTabnineOutlineLogoProps>(
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
      <path d="M20 12l-12 6.75m12 -6.75l-12 -6.75m12 6.75v-4.527l-8 -4.473l-4 2.25m12 6.75v4.5l-8 4.5l-4 -2.25m0 -13.5l-4 2.222v9.028l4 2.25l12 -6.75" />
    </svg>
  )
);

BrandTabnineOutlineLogo.displayName = "BrandTabnineOutlineLogo";

export const BrandTabnineOutlineLogoMetadata = {
  id: "brand-tabnine-outline",
  baseId: "brand-tabnine-outline",
  variant: "default",
  name: "Brand Tabnine Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandTabnineOutlineLogo;
