/**
 * Auto-generated logo component: Brand Kotlin Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandKotlinOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandKotlinOutlineLogo = React.forwardRef<SVGSVGElement, BrandKotlinOutlineLogoProps>(
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
      <path d="M20 20h-16v-16h16" />
  <path d="M4 20l16 -16" />
  <path d="M4 12l8 -8" />
  <path d="M12 12l8 8" />
    </svg>
  )
);

BrandKotlinOutlineLogo.displayName = "BrandKotlinOutlineLogo";

export const BrandKotlinOutlineLogoMetadata = {
  id: "brand-kotlin-outline",
  baseId: "brand-kotlin-outline",
  variant: "default",
  name: "Brand Kotlin Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandKotlinOutlineLogo;
