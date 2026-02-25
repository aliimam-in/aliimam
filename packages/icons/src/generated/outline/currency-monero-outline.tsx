/**
 * Auto-generated logo component: Currency Monero Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CurrencyMoneroOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CurrencyMoneroOutlineLogo = React.forwardRef<SVGSVGElement, CurrencyMoneroOutlineLogoProps>(
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
      <path d="M3 18h3v-11l6 7l6 -7v11h3" />
    </svg>
  )
);

CurrencyMoneroOutlineLogo.displayName = "CurrencyMoneroOutlineLogo";

export const CurrencyMoneroOutlineLogoMetadata = {
  id: "currency-monero-outline",
  baseId: "currency-monero-outline",
  variant: "default",
  name: "Currency Monero Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CurrencyMoneroOutlineLogo;
