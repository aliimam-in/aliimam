/**
 * Auto-generated logo component: Brand Vue Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandVueOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandVueOutlineLogo = React.forwardRef<SVGSVGElement, BrandVueOutlineLogoProps>(
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
      <path d="M16.5 4l-4.5 8l-4.5 -8" />
  <path d="M3 4l9 16l9 -16" />
    </svg>
  )
);

BrandVueOutlineLogo.displayName = "BrandVueOutlineLogo";

export const BrandVueOutlineLogoMetadata = {
  id: "brand-vue-outline",
  baseId: "brand-vue-outline",
  variant: "default",
  name: "Brand Vue Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandVueOutlineLogo;
