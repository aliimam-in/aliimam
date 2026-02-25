/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface WalletMinimalProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const WalletMinimal = React.forwardRef<SVGSVGElement, WalletMinimalProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M17 14h.01" />
  <path d="M7 7h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14" />
    </svg>
  )
);
WalletMinimal.displayName = "WalletMinimal";
export const WalletMinimalMetadata = { id: "wallet-minimal", baseId: "wallet-minimal", variant: "default", name: "Wallet Minimal", category: "app", tags: [], viewBox: "0 0 24 24" } as const;
export default WalletMinimal;
