/**
 * Auto-generated logo component: Brand Hbo Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandHboOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandHboOutlineLogo = React.forwardRef<SVGSVGElement, BrandHboOutlineLogoProps>(
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
      <path d="M2 16v-8" />
  <path d="M6 8v8" />
  <path d="M2 12h4" />
  <path d="M9 16h2a2 2 0 1 0 0 -4h-2h2a2 2 0 1 0 0 -4h-2v8" />
  <path d="M19 8a4 4 0 1 1 0 8a4 4 0 0 1 0 -8" />
  <path d="M18 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
    </svg>
  )
);

BrandHboOutlineLogo.displayName = "BrandHboOutlineLogo";

export const BrandHboOutlineLogoMetadata = {
  id: "brand-hbo-outline",
  baseId: "brand-hbo-outline",
  variant: "default",
  name: "Brand Hbo Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandHboOutlineLogo;
