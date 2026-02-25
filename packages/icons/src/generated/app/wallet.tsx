/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface WalletProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Wallet = React.forwardRef<SVGSVGElement, WalletProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg 
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...(strokeWidth !== undefined ? { strokeWidth } : {})}
      {...props}
    >
      <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1" />
  <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4" />
    </svg>
  )
);
Wallet.displayName = "Wallet";
export const WalletMetadata = { 
  id: "wallet", 
  baseId: "wallet", 
  variant: "default", 
  name: "Wallet", 
  category: "app", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Wallet;
