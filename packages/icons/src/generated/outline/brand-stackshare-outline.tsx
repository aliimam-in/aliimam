/**
 * Auto-generated logo component: Brand Stackshare Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandStackshareOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandStackshareOutlineLogo = React.forwardRef<SVGSVGElement, BrandStackshareOutlineLogoProps>(
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
      <path d="M17 6a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  <path d="M17 18a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  <path d="M3 12a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  <path d="M7 12h3l3.5 6h3.5" />
  <path d="M17 6h-3.5l-3.5 6" />
    </svg>
  )
);

BrandStackshareOutlineLogo.displayName = "BrandStackshareOutlineLogo";

export const BrandStackshareOutlineLogoMetadata = {
  id: "brand-stackshare-outline",
  baseId: "brand-stackshare-outline",
  variant: "default",
  name: "Brand Stackshare Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandStackshareOutlineLogo;
