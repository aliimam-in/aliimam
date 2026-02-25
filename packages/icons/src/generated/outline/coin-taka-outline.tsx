/**
 * Auto-generated logo component: Coin Taka Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CoinTakaOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CoinTakaOutlineLogo = React.forwardRef<SVGSVGElement, CoinTakaOutlineLogoProps>(
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
      <path d="M8 8l.553 -.276a1 1 0 0 1 1.447 .894v6.382a2 2 0 0 0 2 2h.5a2.5 2.5 0 0 0 2.5 -2.5v-.5h-1" />
  <path d="M8 11h7" />
  <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
    </svg>
  )
);

CoinTakaOutlineLogo.displayName = "CoinTakaOutlineLogo";

export const CoinTakaOutlineLogoMetadata = {
  id: "coin-taka-outline",
  baseId: "coin-taka-outline",
  variant: "default",
  name: "Coin Taka Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CoinTakaOutlineLogo;
