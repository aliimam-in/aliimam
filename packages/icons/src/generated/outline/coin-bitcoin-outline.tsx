/**
 * Auto-generated logo component: Coin Bitcoin Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CoinBitcoinOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CoinBitcoinOutlineLogo = React.forwardRef<SVGSVGElement, CoinBitcoinOutlineLogoProps>(
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
  <path d="M9 8h4.09c1.055 0 1.91 .895 1.91 2s-.855 2 -1.91 2c1.055 0 1.91 .895 1.91 2s-.855 2 -1.91 2h-4.09" />
  <path d="M10 12h4" />
  <path d="M10 7v10v-9" />
  <path d="M13 7v1" />
  <path d="M13 16v1" />
    </svg>
  )
);

CoinBitcoinOutlineLogo.displayName = "CoinBitcoinOutlineLogo";

export const CoinBitcoinOutlineLogoMetadata = {
  id: "coin-bitcoin-outline",
  baseId: "coin-bitcoin-outline",
  variant: "default",
  name: "Coin Bitcoin Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CoinBitcoinOutlineLogo;
