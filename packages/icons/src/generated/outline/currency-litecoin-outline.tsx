/**
 * Auto-generated logo component: Currency Litecoin Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CurrencyLitecoinOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CurrencyLitecoinOutlineLogo = React.forwardRef<SVGSVGElement, CurrencyLitecoinOutlineLogoProps>(
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
      <path d="M18 19h-8.194a2 2 0 0 1 -1.98 -2.283l1.674 -11.717" />
  <path d="M14 9l-9 4" />
    </svg>
  )
);

CurrencyLitecoinOutlineLogo.displayName = "CurrencyLitecoinOutlineLogo";

export const CurrencyLitecoinOutlineLogoMetadata = {
  id: "currency-litecoin-outline",
  baseId: "currency-litecoin-outline",
  variant: "default",
  name: "Currency Litecoin Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CurrencyLitecoinOutlineLogo;
