/**
 * Auto-generated logo component: Brand Xdeep Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandXdeepOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandXdeepOutlineLogo = React.forwardRef<SVGSVGElement, BrandXdeepOutlineLogoProps>(
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
      <path d="M14.401 8.398l1.599 -2.398h5l-4 6l4 6h-5l-8 -12h-5l4 6l-4 6h5l1.596 -2.393" />
    </svg>
  )
);

BrandXdeepOutlineLogo.displayName = "BrandXdeepOutlineLogo";

export const BrandXdeepOutlineLogoMetadata = {
  id: "brand-xdeep-outline",
  baseId: "brand-xdeep-outline",
  variant: "default",
  name: "Brand Xdeep Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandXdeepOutlineLogo;
