/**
 * Auto-generated logo component: Brand Netflix Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandNetflixOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandNetflixOutlineLogo = React.forwardRef<SVGSVGElement, BrandNetflixOutlineLogoProps>(
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
      <path d="M9 3l10 18h-4l-10 -18l4 0" />
  <path d="M5 3v18h4v-10.5" />
  <path d="M19 21v-18h-4v10.5" />
    </svg>
  )
);

BrandNetflixOutlineLogo.displayName = "BrandNetflixOutlineLogo";

export const BrandNetflixOutlineLogoMetadata = {
  id: "brand-netflix-outline",
  baseId: "brand-netflix-outline",
  variant: "default",
  name: "Brand Netflix Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandNetflixOutlineLogo;
