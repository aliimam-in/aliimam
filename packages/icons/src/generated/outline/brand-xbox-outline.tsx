/**
 * Auto-generated logo component: Brand Xbox Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandXboxOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandXboxOutlineLogo = React.forwardRef<SVGSVGElement, BrandXboxOutlineLogoProps>(
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
  <path d="M6.5 5c7.72 2.266 10.037 7.597 12.5 12.5" />
  <path d="M17.5 5c-7.72 2.266 -10.037 7.597 -12.5 12.5" />
    </svg>
  )
);

BrandXboxOutlineLogo.displayName = "BrandXboxOutlineLogo";

export const BrandXboxOutlineLogoMetadata = {
  id: "brand-xbox-outline",
  baseId: "brand-xbox-outline",
  variant: "default",
  name: "Brand Xbox Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandXboxOutlineLogo;
