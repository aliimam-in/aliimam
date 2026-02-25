/**
 * Auto-generated logo component: Wallet Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface WalletOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const WalletOutlineLogo = React.forwardRef<SVGSVGElement, WalletOutlineLogoProps>(
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
      <path d="M17 8v-3a1 1 0 0 0 -1 -1h-10a2 2 0 0 0 0 4h12a1 1 0 0 1 1 1v3m0 4v3a1 1 0 0 1 -1 1h-12a2 2 0 0 1 -2 -2v-12" />
  <path d="M20 12v4h-4a2 2 0 0 1 0 -4h4" />
    </svg>
  )
);

WalletOutlineLogo.displayName = "WalletOutlineLogo";

export const WalletOutlineLogoMetadata = {
  id: "wallet-outline",
  baseId: "wallet-outline",
  variant: "default",
  name: "Wallet Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default WalletOutlineLogo;
