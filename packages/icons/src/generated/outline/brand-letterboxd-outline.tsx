/**
 * Auto-generated logo component: Brand Letterboxd Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandLetterboxdOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandLetterboxdOutlineLogo = React.forwardRef<SVGSVGElement, BrandLetterboxdOutlineLogoProps>(
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
      <path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
  <path d="M6 12a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  <path d="M10 12a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  <path d="M14 12a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    </svg>
  )
);

BrandLetterboxdOutlineLogo.displayName = "BrandLetterboxdOutlineLogo";

export const BrandLetterboxdOutlineLogoMetadata = {
  id: "brand-letterboxd-outline",
  baseId: "brand-letterboxd-outline",
  variant: "default",
  name: "Brand Letterboxd Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandLetterboxdOutlineLogo;
