/**
 * Auto-generated logo component: Brand Appstore Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandAppstoreOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandAppstoreOutlineLogo = React.forwardRef<SVGSVGElement, BrandAppstoreOutlineLogoProps>(
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
  <path d="M8 16l1.106 -1.99m1.4 -2.522l2.494 -4.488" />
  <path d="M7 14h5m2.9 0h2.1" />
  <path d="M16 16l-2.51 -4.518m-1.487 -2.677l-1 -1.805" />
    </svg>
  )
);

BrandAppstoreOutlineLogo.displayName = "BrandAppstoreOutlineLogo";

export const BrandAppstoreOutlineLogoMetadata = {
  id: "brand-appstore-outline",
  baseId: "brand-appstore-outline",
  variant: "default",
  name: "Brand Appstore Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandAppstoreOutlineLogo;
