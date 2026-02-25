/**
 * Auto-generated logo component: Brand Craft Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandCraftOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandCraftOutlineLogo = React.forwardRef<SVGSVGElement, BrandCraftOutlineLogoProps>(
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
      <path d="M20 4h-8a8 8 0 1 0 0 16h8a8 8 0 0 0 -8 -8a8 8 0 0 0 8 -8" />
  <path d="M4 12h8" />
  <path d="M12 4v16" />
    </svg>
  )
);

BrandCraftOutlineLogo.displayName = "BrandCraftOutlineLogo";

export const BrandCraftOutlineLogoMetadata = {
  id: "brand-craft-outline",
  baseId: "brand-craft-outline",
  variant: "default",
  name: "Brand Craft Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandCraftOutlineLogo;
