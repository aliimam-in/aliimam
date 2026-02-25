/**
 * Auto-generated logo component: Transaction Bitcoin Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface TransactionBitcoinOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const TransactionBitcoinOutlineLogo = React.forwardRef<SVGSVGElement, TransactionBitcoinOutlineLogoProps>(
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
      <path d="M15 12h4.09c1.055 0 1.91 .895 1.91 2s-.855 2 -1.91 2c1.055 0 1.91 .895 1.91 2s-.855 2 -1.91 2h-4.09" />
  <path d="M16 16h4" />
  <path d="M16 11v10v-9" />
  <path d="M19 11v1" />
  <path d="M19 20v1" />
  <path d="M3 5a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  <path d="M15 5a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  <path d="M7 5h8" />
  <path d="M7 5v8a3 3 0 0 0 3 3h1" />
    </svg>
  )
);

TransactionBitcoinOutlineLogo.displayName = "TransactionBitcoinOutlineLogo";

export const TransactionBitcoinOutlineLogoMetadata = {
  id: "transaction-bitcoin-outline",
  baseId: "transaction-bitcoin-outline",
  variant: "default",
  name: "Transaction Bitcoin Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default TransactionBitcoinOutlineLogo;
