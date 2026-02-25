/**
 * Auto-generated logo component: Coin Rupee Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CoinRupeeOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CoinRupeeOutlineLogo = React.forwardRef<SVGSVGElement, CoinRupeeOutlineLogoProps>(
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
  <path d="M15 8h-6h1a3 3 0 0 1 0 6h-1l3 3" />
  <path d="M9 11h6" />
    </svg>
  )
);

CoinRupeeOutlineLogo.displayName = "CoinRupeeOutlineLogo";

export const CoinRupeeOutlineLogoMetadata = {
  id: "coin-rupee-outline",
  baseId: "coin-rupee-outline",
  variant: "default",
  name: "Coin Rupee Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CoinRupeeOutlineLogo;
