/**
 * Auto-generated logo component: Brand Bilibili Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandBilibiliOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandBilibiliOutlineLogo = React.forwardRef<SVGSVGElement, BrandBilibiliOutlineLogoProps>(
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
      <path d="M3 10a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v6a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4v-6" />
  <path d="M8 3l2 3" />
  <path d="M16 3l-2 3" />
  <path d="M9 13v-2" />
  <path d="M15 11v2" />
    </svg>
  )
);

BrandBilibiliOutlineLogo.displayName = "BrandBilibiliOutlineLogo";

export const BrandBilibiliOutlineLogoMetadata = {
  id: "brand-bilibili-outline",
  baseId: "brand-bilibili-outline",
  variant: "default",
  name: "Brand Bilibili Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandBilibiliOutlineLogo;
