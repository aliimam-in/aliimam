/**
 * Auto-generated logo component: Brand Xamarin Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandXamarinOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandXamarinOutlineLogo = React.forwardRef<SVGSVGElement, BrandXamarinOutlineLogoProps>(
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
      <path d="M15.958 21h-7.917a2 2 0 0 1 -1.732 -1l-4.041 -7a2 2 0 0 1 0 -2l4.041 -7a2 2 0 0 1 1.732 -1h7.917a2 2 0 0 1 1.732 1l4.042 7a2 2 0 0 1 0 2l-4.041 7a2 2 0 0 1 -1.733 1" />
  <path d="M15 16l-6 -8" />
  <path d="M9 16l6 -8" />
    </svg>
  )
);

BrandXamarinOutlineLogo.displayName = "BrandXamarinOutlineLogo";

export const BrandXamarinOutlineLogoMetadata = {
  id: "brand-xamarin-outline",
  baseId: "brand-xamarin-outline",
  variant: "default",
  name: "Brand Xamarin Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandXamarinOutlineLogo;
