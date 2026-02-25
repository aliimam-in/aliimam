/**
 * Auto-generated logo component: Brand Unsplash Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandUnsplashOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandUnsplashOutlineLogo = React.forwardRef<SVGSVGElement, BrandUnsplashOutlineLogoProps>(
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
      <path d="M4 11h5v4h6v-4h5v9h-16v-9" />
  <path d="M9 4h6v4h-6l0 -4" />
    </svg>
  )
);

BrandUnsplashOutlineLogo.displayName = "BrandUnsplashOutlineLogo";

export const BrandUnsplashOutlineLogoMetadata = {
  id: "brand-unsplash-outline",
  baseId: "brand-unsplash-outline",
  variant: "default",
  name: "Brand Unsplash Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandUnsplashOutlineLogo;
