/**
 * Auto-generated logo component: Brand Intercom Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandIntercomOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandIntercomOutlineLogo = React.forwardRef<SVGSVGElement, BrandIntercomOutlineLogoProps>(
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
      <path d="M4 6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2l0 -12" />
  <path d="M7 8v3" />
  <path d="M10 7v6" />
  <path d="M14 7v6" />
  <path d="M17 8v3" />
  <path d="M7 15c4 2.667 6 2.667 10 0" />
    </svg>
  )
);

BrandIntercomOutlineLogo.displayName = "BrandIntercomOutlineLogo";

export const BrandIntercomOutlineLogoMetadata = {
  id: "brand-intercom-outline",
  baseId: "brand-intercom-outline",
  variant: "default",
  name: "Brand Intercom Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandIntercomOutlineLogo;
