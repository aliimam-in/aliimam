/**
 * Auto-generated logo component: Brand Behance Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandBehanceOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandBehanceOutlineLogo = React.forwardRef<SVGSVGElement, BrandBehanceOutlineLogoProps>(
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
      <path d="M3 18v-12h4.5a3 3 0 0 1 0 6a3 3 0 0 1 0 6h-4.5" />
  <path d="M3 12l4.5 0" />
  <path d="M14 13h7a3.5 3.5 0 0 0 -7 0v2a3.5 3.5 0 0 0 6.64 1" />
  <path d="M16 6l3 0" />
    </svg>
  )
);

BrandBehanceOutlineLogo.displayName = "BrandBehanceOutlineLogo";

export const BrandBehanceOutlineLogoMetadata = {
  id: "brand-behance-outline",
  baseId: "brand-behance-outline",
  variant: "default",
  name: "Brand Behance Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandBehanceOutlineLogo;
