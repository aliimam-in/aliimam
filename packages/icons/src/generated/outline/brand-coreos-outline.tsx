/**
 * Auto-generated logo component: Brand Coreos Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandCoreosOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandCoreosOutlineLogo = React.forwardRef<SVGSVGElement, BrandCoreosOutlineLogoProps>(
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
      <path d="M21 12a9 9 0 1 1 -18 0a9 9 0 0 1 18 0" />
  <path d="M12 3c-3.263 3.212 -3 7.654 -3 12c4.59 .244 8.814 -.282 12 -3" />
  <path d="M9.5 9a4.494 4.494 0 0 1 5.5 5.5" />
    </svg>
  )
);

BrandCoreosOutlineLogo.displayName = "BrandCoreosOutlineLogo";

export const BrandCoreosOutlineLogoMetadata = {
  id: "brand-coreos-outline",
  baseId: "brand-coreos-outline",
  variant: "default",
  name: "Brand Coreos Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandCoreosOutlineLogo;
