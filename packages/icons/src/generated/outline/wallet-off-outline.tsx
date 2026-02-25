/**
 * Auto-generated logo component: Wallet Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface WalletOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const WalletOffOutlineLogo = React.forwardRef<SVGSVGElement, WalletOffOutlineLogoProps>(
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
      <path d="M17 8v-3a1 1 0 0 0 -1 -1h-8m-3.413 .584a2 2 0 0 0 1.413 3.416h2m4 0h6a1 1 0 0 1 1 1v3" />
  <path d="M19 19a1 1 0 0 1 -1 1h-12a2 2 0 0 1 -2 -2v-12" />
  <path d="M16 12h4v4m-4 0a2 2 0 0 1 -2 -2" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

WalletOffOutlineLogo.displayName = "WalletOffOutlineLogo";

export const WalletOffOutlineLogoMetadata = {
  id: "wallet-off-outline",
  baseId: "wallet-off-outline",
  variant: "default",
  name: "Wallet Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default WalletOffOutlineLogo;
