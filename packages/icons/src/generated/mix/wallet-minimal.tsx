/**
 * Auto-generated logo component: Wallet Minimal (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface WalletMinimalLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const WalletMinimalLogo = React.forwardRef<SVGSVGElement, WalletMinimalLogoProps>(
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
      <path d="M17 14h.01" />
  <path d="M7 7h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14" />
    </svg>
  )
);

WalletMinimalLogo.displayName = "WalletMinimalLogo";

export const WalletMinimalLogoMetadata = {
  id: "wallet-minimal",
  baseId: "wallet-minimal",
  variant: "default",
  name: "Wallet Minimal",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default WalletMinimalLogo;
