/**
 * Auto-generated logo component: Coin Pound Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CoinPoundOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CoinPoundOutlineLogo = React.forwardRef<SVGSVGElement, CoinPoundOutlineLogoProps>(
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
  <path d="M15 9a2 2 0 1 0 -4 0v5a2 2 0 0 1 -2 2h6" />
  <path d="M9 12h4" />
    </svg>
  )
);

CoinPoundOutlineLogo.displayName = "CoinPoundOutlineLogo";

export const CoinPoundOutlineLogoMetadata = {
  id: "coin-pound-outline",
  baseId: "coin-pound-outline",
  variant: "default",
  name: "Coin Pound Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CoinPoundOutlineLogo;
