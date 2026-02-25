/**
 * Auto-generated logo component: Coin Monero Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CoinMoneroOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CoinMoneroOutlineLogo = React.forwardRef<SVGSVGElement, CoinMoneroOutlineLogoProps>(
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
  <path d="M4 16h4v-7l4 4l4 -4v7h4" />
    </svg>
  )
);

CoinMoneroOutlineLogo.displayName = "CoinMoneroOutlineLogo";

export const CoinMoneroOutlineLogoMetadata = {
  id: "coin-monero-outline",
  baseId: "coin-monero-outline",
  variant: "default",
  name: "Coin Monero Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CoinMoneroOutlineLogo;
