/**
 * Auto-generated logo component: Brand Pocket Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandPocketOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandPocketOutlineLogo = React.forwardRef<SVGSVGElement, BrandPocketOutlineLogoProps>(
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
      <path d="M5 4h14a2 2 0 0 1 2 2v6a9 9 0 0 1 -18 0v-6a2 2 0 0 1 2 -2" />
  <path d="M8 11l4 4l4 -4" />
    </svg>
  )
);

BrandPocketOutlineLogo.displayName = "BrandPocketOutlineLogo";

export const BrandPocketOutlineLogoMetadata = {
  id: "brand-pocket-outline",
  baseId: "brand-pocket-outline",
  variant: "default",
  name: "Brand Pocket Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandPocketOutlineLogo;
