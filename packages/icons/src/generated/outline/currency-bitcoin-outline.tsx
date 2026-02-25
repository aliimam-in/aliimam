/**
 * Auto-generated logo component: Currency Bitcoin Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CurrencyBitcoinOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CurrencyBitcoinOutlineLogo = React.forwardRef<SVGSVGElement, CurrencyBitcoinOutlineLogoProps>(
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
      <path d="M6 6h8a3 3 0 0 1 0 6a3 3 0 0 1 0 6h-8" />
  <path d="M8 6l0 12" />
  <path d="M8 12l6 0" />
  <path d="M9 3l0 3" />
  <path d="M13 3l0 3" />
  <path d="M9 18l0 3" />
  <path d="M13 18l0 3" />
    </svg>
  )
);

CurrencyBitcoinOutlineLogo.displayName = "CurrencyBitcoinOutlineLogo";

export const CurrencyBitcoinOutlineLogoMetadata = {
  id: "currency-bitcoin-outline",
  baseId: "currency-bitcoin-outline",
  variant: "default",
  name: "Currency Bitcoin Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CurrencyBitcoinOutlineLogo;
