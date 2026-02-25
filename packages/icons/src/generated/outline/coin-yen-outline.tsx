/**
 * Auto-generated logo component: Coin Yen Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CoinYenOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CoinYenOutlineLogo = React.forwardRef<SVGSVGElement, CoinYenOutlineLogoProps>(
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
  <path d="M9 12h6" />
  <path d="M9 15h6" />
  <path d="M9 8l3 4.5" />
  <path d="M15 8l-3 4.5v4.5" />
    </svg>
  )
);

CoinYenOutlineLogo.displayName = "CoinYenOutlineLogo";

export const CoinYenOutlineLogoMetadata = {
  id: "coin-yen-outline",
  baseId: "coin-yen-outline",
  variant: "default",
  name: "Coin Yen Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CoinYenOutlineLogo;
