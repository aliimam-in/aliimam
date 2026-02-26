/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface WalletCardsProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const WalletCards = React.forwardRef<SVGSVGElement, WalletCardsProps>(
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
      <rect width="18" height="18" x="3" y="3" rx="2" />
  <path d="M3 9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2" />
  <path d="M3 11h3c.8 0 1.6.3 2.1.9l1.1.9c1.6 1.6 4.1 1.6 5.7 0l1.1-.9c.5-.5 1.3-.9 2.1-.9H21" />
    </svg>
  )
);
WalletCards.displayName = "WalletCards";
export const WalletCardsMetadata = { 
  id: "wallet-cards", 
  baseId: "wallet-cards", 
  variant: "default", 
  name: "Wallet Cards", 
  category: "app", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default WalletCards;
