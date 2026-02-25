/**
 * Auto-generated logo component: Brand Miniprogram Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandMiniprogramOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandMiniprogramOutlineLogo = React.forwardRef<SVGSVGElement, BrandMiniprogramOutlineLogoProps>(
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
  <path d="M8 11.503a2.5 2.5 0 1 0 4 2v-3a2.5 2.5 0 1 1 4 2" />
    </svg>
  )
);

BrandMiniprogramOutlineLogo.displayName = "BrandMiniprogramOutlineLogo";

export const BrandMiniprogramOutlineLogoMetadata = {
  id: "brand-miniprogram-outline",
  baseId: "brand-miniprogram-outline",
  variant: "default",
  name: "Brand Miniprogram Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandMiniprogramOutlineLogo;
