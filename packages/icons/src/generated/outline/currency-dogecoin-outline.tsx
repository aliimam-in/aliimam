/**
 * Auto-generated logo component: Currency Dogecoin Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CurrencyDogecoinOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CurrencyDogecoinOutlineLogo = React.forwardRef<SVGSVGElement, CurrencyDogecoinOutlineLogoProps>(
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
      <path d="M6 12h6" />
  <path d="M9 6v12" />
  <path d="M6 18h6a6 6 0 1 0 0 -12h-6" />
    </svg>
  )
);

CurrencyDogecoinOutlineLogo.displayName = "CurrencyDogecoinOutlineLogo";

export const CurrencyDogecoinOutlineLogoMetadata = {
  id: "currency-dogecoin-outline",
  baseId: "currency-dogecoin-outline",
  variant: "default",
  name: "Currency Dogecoin Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CurrencyDogecoinOutlineLogo;
