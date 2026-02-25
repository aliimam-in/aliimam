/**
 * Auto-generated logo component: Currency Florin Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CurrencyFlorinOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CurrencyFlorinOutlineLogo = React.forwardRef<SVGSVGElement, CurrencyFlorinOutlineLogoProps>(
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
      <path d="M8 12h8" />
  <path d="M7 19c1.213 0 2.31 -.723 2.788 -1.838l4.424 -10.324a3.033 3.033 0 0 1 2.788 -1.838" />
    </svg>
  )
);

CurrencyFlorinOutlineLogo.displayName = "CurrencyFlorinOutlineLogo";

export const CurrencyFlorinOutlineLogoMetadata = {
  id: "currency-florin-outline",
  baseId: "currency-florin-outline",
  variant: "default",
  name: "Currency Florin Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CurrencyFlorinOutlineLogo;
