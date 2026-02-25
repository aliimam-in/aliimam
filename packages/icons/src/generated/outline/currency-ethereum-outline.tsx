/**
 * Auto-generated logo component: Currency Ethereum Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CurrencyEthereumOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CurrencyEthereumOutlineLogo = React.forwardRef<SVGSVGElement, CurrencyEthereumOutlineLogoProps>(
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
      <path d="M6 12l6 -9l6 9l-6 9l-6 -9" />
  <path d="M6 12l6 -3l6 3l-6 2l-6 -2" />
    </svg>
  )
);

CurrencyEthereumOutlineLogo.displayName = "CurrencyEthereumOutlineLogo";

export const CurrencyEthereumOutlineLogoMetadata = {
  id: "currency-ethereum-outline",
  baseId: "currency-ethereum-outline",
  variant: "default",
  name: "Currency Ethereum Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CurrencyEthereumOutlineLogo;
