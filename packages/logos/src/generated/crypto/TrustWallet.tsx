/**
 * Auto-generated logo component: TrustWallet (default)
 * Category: crypto
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface TrustWalletProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const TrustWallet = React.forwardRef<SVGSVGElement, TrustWalletProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg" 
      {...props}
    >
      <path d="M1.03357 3.46872L11.5076 0.00524902V23.9823C4.02607 20.7851 1.03357 14.6577 1.03357 11.1947V3.46872Z" fill="#0500FF"/>
    </svg>
  )
);

TrustWallet.displayName = "TrustWallet";

export const TrustWalletMetadata = {
  id: "TrustWallet",
  baseId: "TrustWallet",
  variant: "default",
  name: "TrustWallet",
  category: "crypto",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default TrustWallet;
