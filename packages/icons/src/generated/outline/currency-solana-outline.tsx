/**
 * Auto-generated logo component: Currency Solana Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CurrencySolanaOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CurrencySolanaOutlineLogo = React.forwardRef<SVGSVGElement, CurrencySolanaOutlineLogoProps>(
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
      <path d="M4 18h12l4 -4h-12l-4 4" />
  <path d="M8 14l-4 -4h12l4 4" />
  <path d="M16 10l4 -4h-12l-4 4" />
    </svg>
  )
);

CurrencySolanaOutlineLogo.displayName = "CurrencySolanaOutlineLogo";

export const CurrencySolanaOutlineLogoMetadata = {
  id: "currency-solana-outline",
  baseId: "currency-solana-outline",
  variant: "default",
  name: "Currency Solana Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CurrencySolanaOutlineLogo;
