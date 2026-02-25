/**
 * Auto-generated logo component: Brand Shazam Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandShazamOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandShazamOutlineLogo = React.forwardRef<SVGSVGElement, BrandShazamOutlineLogoProps>(
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
      <path d="M10 12l2 -2a2.828 2.828 0 0 1 4 0a2.828 2.828 0 0 1 0 4l-3 3" />
  <path d="M14 12l-2 2a2.828 2.828 0 1 1 -4 -4l3 -3" />
  <path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
    </svg>
  )
);

BrandShazamOutlineLogo.displayName = "BrandShazamOutlineLogo";

export const BrandShazamOutlineLogoMetadata = {
  id: "brand-shazam-outline",
  baseId: "brand-shazam-outline",
  variant: "default",
  name: "Brand Shazam Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandShazamOutlineLogo;
