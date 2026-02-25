/**
 * Auto-generated logo component: Brand Instagram Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandInstagramOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandInstagramOutlineLogo = React.forwardRef<SVGSVGElement, BrandInstagramOutlineLogoProps>(
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
      <path d="M4 8a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4l0 -8" />
  <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
  <path d="M16.5 7.5v.01" />
    </svg>
  )
);

BrandInstagramOutlineLogo.displayName = "BrandInstagramOutlineLogo";

export const BrandInstagramOutlineLogoMetadata = {
  id: "brand-instagram-outline",
  baseId: "brand-instagram-outline",
  variant: "default",
  name: "Brand Instagram Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandInstagramOutlineLogo;
