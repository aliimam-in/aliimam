/**
 * Auto-generated logo component: Brand Tabler Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandTablerOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandTablerOutlineLogo = React.forwardRef<SVGSVGElement, BrandTablerOutlineLogoProps>(
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
      <path d="M8 9l3 3l-3 3" />
  <path d="M13 15h3" />
  <path d="M3 7a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v10a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4l0 -10" />
    </svg>
  )
);

BrandTablerOutlineLogo.displayName = "BrandTablerOutlineLogo";

export const BrandTablerOutlineLogoMetadata = {
  id: "brand-tabler-outline",
  baseId: "brand-tabler-outline",
  variant: "default",
  name: "Brand Tabler Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandTablerOutlineLogo;
