/**
 * Auto-generated logo component: Brand Fiverr Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandFiverrOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandFiverrOutlineLogo = React.forwardRef<SVGSVGElement, BrandFiverrOutlineLogoProps>(
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
      <path d="M15 3h-2a6 6 0 0 0 -6 6h-3v4h3v8h4v-7h4v7h4v-11h-8v-1.033a1.967 1.967 0 0 1 2 -1.967h2v-4" />
    </svg>
  )
);

BrandFiverrOutlineLogo.displayName = "BrandFiverrOutlineLogo";

export const BrandFiverrOutlineLogoMetadata = {
  id: "brand-fiverr-outline",
  baseId: "brand-fiverr-outline",
  variant: "default",
  name: "Brand Fiverr Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandFiverrOutlineLogo;
