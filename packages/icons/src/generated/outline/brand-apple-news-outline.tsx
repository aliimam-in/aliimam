/**
 * Auto-generated logo component: Brand Apple News Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandAppleNewsOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandAppleNewsOutlineLogo = React.forwardRef<SVGSVGElement, BrandAppleNewsOutlineLogoProps>(
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
      <path d="M4 14l6 6h-6l0 -6" />
  <path d="M20 10l-6 -6h6l0 6" />
  <path d="M4 4v4l12 12h4v-4l-12 -12l-4 0" />
    </svg>
  )
);

BrandAppleNewsOutlineLogo.displayName = "BrandAppleNewsOutlineLogo";

export const BrandAppleNewsOutlineLogoMetadata = {
  id: "brand-apple-news-outline",
  baseId: "brand-apple-news-outline",
  variant: "default",
  name: "Brand Apple News Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandAppleNewsOutlineLogo;
