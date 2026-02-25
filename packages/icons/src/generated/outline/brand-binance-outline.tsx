/**
 * Auto-generated logo component: Brand Binance Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandBinanceOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandBinanceOutlineLogo = React.forwardRef<SVGSVGElement, BrandBinanceOutlineLogoProps>(
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
      <path d="M6 8l2 2l4 -4l4 4l2 -2l-6 -6l-6 6" />
  <path d="M6 16l2 -2l4 4l3.5 -3.5l2 2l-5.5 5.5l-6 -6" />
  <path d="M20 10l2 2l-2 2l-2 -2l2 -2" />
  <path d="M4 10l2 2l-2 2l-2 -2l2 -2" />
  <path d="M12 10l2 2l-2 2l-2 -2l2 -2" />
    </svg>
  )
);

BrandBinanceOutlineLogo.displayName = "BrandBinanceOutlineLogo";

export const BrandBinanceOutlineLogoMetadata = {
  id: "brand-binance-outline",
  baseId: "brand-binance-outline",
  variant: "default",
  name: "Brand Binance Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandBinanceOutlineLogo;
