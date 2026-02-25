/**
 * Auto-generated logo component: Brand Vite Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandViteOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandViteOutlineLogo = React.forwardRef<SVGSVGElement, BrandViteOutlineLogoProps>(
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
      <path d="M10 4.5l6 -1.5l-2 6.5l2 -.5l-4 7v-5l-3 1l1 -7.5" />
  <path d="M15 6.5l7 -1.5l-10 17l-10 -17l7.741 1.5" />
    </svg>
  )
);

BrandViteOutlineLogo.displayName = "BrandViteOutlineLogo";

export const BrandViteOutlineLogoMetadata = {
  id: "brand-vite-outline",
  baseId: "brand-vite-outline",
  variant: "default",
  name: "Brand Vite Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandViteOutlineLogo;
