/**
 * Auto-generated logo component: Brand Bing Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandBingOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandBingOutlineLogo = React.forwardRef<SVGSVGElement, BrandBingOutlineLogoProps>(
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
      <path d="M5 3l4 1.5v12l6 -2.5l-2 -1l-1 -4l7 2.5v4.5l-10 5l-4 -2l0 -16" />
    </svg>
  )
);

BrandBingOutlineLogo.displayName = "BrandBingOutlineLogo";

export const BrandBingOutlineLogoMetadata = {
  id: "brand-bing-outline",
  baseId: "brand-bing-outline",
  variant: "default",
  name: "Brand Bing Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandBingOutlineLogo;
