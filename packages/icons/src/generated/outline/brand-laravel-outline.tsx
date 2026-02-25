/**
 * Auto-generated logo component: Brand Laravel Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandLaravelOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandLaravelOutlineLogo = React.forwardRef<SVGSVGElement, BrandLaravelOutlineLogoProps>(
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
      <path d="M3 17l8 5l7 -4v-8l-4 -2.5l4 -2.5l4 2.5v4l-11 6.5l-4 -2.5v-7.5l-4 -2.5l0 11.5" />
  <path d="M11 18v4" />
  <path d="M7 15.5l7 -4" />
  <path d="M14 7.5v4" />
  <path d="M14 11.5l4 2.5" />
  <path d="M11 13v-7.5l-4 -2.5l-4 2.5" />
  <path d="M7 8l4 -2.5" />
  <path d="M18 10l4 -2.5" />
    </svg>
  )
);

BrandLaravelOutlineLogo.displayName = "BrandLaravelOutlineLogo";

export const BrandLaravelOutlineLogoMetadata = {
  id: "brand-laravel-outline",
  baseId: "brand-laravel-outline",
  variant: "default",
  name: "Brand Laravel Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandLaravelOutlineLogo;
