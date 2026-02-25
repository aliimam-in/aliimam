/**
 * Auto-generated logo component: Brand Juejin Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandJuejinOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandJuejinOutlineLogo = React.forwardRef<SVGSVGElement, BrandJuejinOutlineLogoProps>(
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
      <path d="M2 12l10 7.422l10 -7.422" />
  <path d="M7 9l5 4l5 -4" />
  <path d="M11 6l1 .8l1 -.8l-1 -.8l-1 .8" />
    </svg>
  )
);

BrandJuejinOutlineLogo.displayName = "BrandJuejinOutlineLogo";

export const BrandJuejinOutlineLogoMetadata = {
  id: "brand-juejin-outline",
  baseId: "brand-juejin-outline",
  variant: "default",
  name: "Brand Juejin Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandJuejinOutlineLogo;
