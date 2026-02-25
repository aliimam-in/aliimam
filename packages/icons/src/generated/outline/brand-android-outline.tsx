/**
 * Auto-generated logo component: Brand Android Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandAndroidOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandAndroidOutlineLogo = React.forwardRef<SVGSVGElement, BrandAndroidOutlineLogoProps>(
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
      <path d="M4 10l0 6" />
  <path d="M20 10l0 6" />
  <path d="M7 9h10v8a1 1 0 0 1 -1 1h-8a1 1 0 0 1 -1 -1v-8a5 5 0 0 1 10 0" />
  <path d="M8 3l1 2" />
  <path d="M16 3l-1 2" />
  <path d="M9 18l0 3" />
  <path d="M15 18l0 3" />
    </svg>
  )
);

BrandAndroidOutlineLogo.displayName = "BrandAndroidOutlineLogo";

export const BrandAndroidOutlineLogoMetadata = {
  id: "brand-android-outline",
  baseId: "brand-android-outline",
  variant: "default",
  name: "Brand Android Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandAndroidOutlineLogo;
