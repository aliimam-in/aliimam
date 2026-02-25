/**
 * Auto-generated logo component: Brand Appgallery Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandAppgalleryOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandAppgalleryOutlineLogo = React.forwardRef<SVGSVGElement, BrandAppgalleryOutlineLogoProps>(
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
  <path d="M9 8a3 3 0 0 0 6 0" />
    </svg>
  )
);

BrandAppgalleryOutlineLogo.displayName = "BrandAppgalleryOutlineLogo";

export const BrandAppgalleryOutlineLogoMetadata = {
  id: "brand-appgallery-outline",
  baseId: "brand-appgallery-outline",
  variant: "default",
  name: "Brand Appgallery Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandAppgalleryOutlineLogo;
