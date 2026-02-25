/**
 * Auto-generated logo component: Brand Sublime Text Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandSublimeTextOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandSublimeTextOutlineLogo = React.forwardRef<SVGSVGElement, BrandSublimeTextOutlineLogoProps>(
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
      <path d="M19 8l-14 4.5v-5.5l14 -4.5l0 5.5" />
  <path d="M19 17l-14 4.5v-5.5l14 -4.5l0 5.5" />
  <path d="M19 11.5l-14 -4.5" />
  <path d="M5 12.5l14 4.5" />
    </svg>
  )
);

BrandSublimeTextOutlineLogo.displayName = "BrandSublimeTextOutlineLogo";

export const BrandSublimeTextOutlineLogoMetadata = {
  id: "brand-sublime-text-outline",
  baseId: "brand-sublime-text-outline",
  variant: "default",
  name: "Brand Sublime Text Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandSublimeTextOutlineLogo;
