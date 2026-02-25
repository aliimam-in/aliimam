/**
 * Auto-generated logo component: Brand Stocktwits Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandStocktwitsOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandStocktwitsOutlineLogo = React.forwardRef<SVGSVGElement, BrandStocktwitsOutlineLogoProps>(
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
      <path d="M16 3l-8 4.5l8 4.5" />
  <path d="M8 12l8 4.5l-8 4.5" />
    </svg>
  )
);

BrandStocktwitsOutlineLogo.displayName = "BrandStocktwitsOutlineLogo";

export const BrandStocktwitsOutlineLogoMetadata = {
  id: "brand-stocktwits-outline",
  baseId: "brand-stocktwits-outline",
  variant: "default",
  name: "Brand Stocktwits Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandStocktwitsOutlineLogo;
