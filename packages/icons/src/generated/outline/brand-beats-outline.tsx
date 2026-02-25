/**
 * Auto-generated logo component: Brand Beats Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandBeatsOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandBeatsOutlineLogo = React.forwardRef<SVGSVGElement, BrandBeatsOutlineLogoProps>(
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
  <path d="M9 12.5a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0 -7 0" />
  <path d="M9 12v-8" />
    </svg>
  )
);

BrandBeatsOutlineLogo.displayName = "BrandBeatsOutlineLogo";

export const BrandBeatsOutlineLogoMetadata = {
  id: "brand-beats-outline",
  baseId: "brand-beats-outline",
  variant: "default",
  name: "Brand Beats Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandBeatsOutlineLogo;
