/**
 * Auto-generated logo component: Brand Digg Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandDiggOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandDiggOutlineLogo = React.forwardRef<SVGSVGElement, BrandDiggOutlineLogoProps>(
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
      <path d="M6 15h-3v-4h3" />
  <path d="M15 15h-3v-4h3" />
  <path d="M9 15v-4" />
  <path d="M15 11v7h-3" />
  <path d="M6 7v8" />
  <path d="M21 15h-3v-4h3" />
  <path d="M21 11v7h-3" />
    </svg>
  )
);

BrandDiggOutlineLogo.displayName = "BrandDiggOutlineLogo";

export const BrandDiggOutlineLogoMetadata = {
  id: "brand-digg-outline",
  baseId: "brand-digg-outline",
  variant: "default",
  name: "Brand Digg Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandDiggOutlineLogo;
