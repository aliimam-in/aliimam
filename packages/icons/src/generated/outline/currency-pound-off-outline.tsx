/**
 * Auto-generated logo component: Currency Pound Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CurrencyPoundOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CurrencyPoundOffOutlineLogo = React.forwardRef<SVGSVGElement, CurrencyPoundOffOutlineLogoProps>(
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
      <path d="M17 18.5a6 6 0 0 1 -5 0a6 6 0 0 0 -5 .5a3 3 0 0 0 2 -2.5v-7.5m1.192 -2.825a4 4 0 0 1 6.258 .825m-3.45 6h-6" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

CurrencyPoundOffOutlineLogo.displayName = "CurrencyPoundOffOutlineLogo";

export const CurrencyPoundOffOutlineLogoMetadata = {
  id: "currency-pound-off-outline",
  baseId: "currency-pound-off-outline",
  variant: "default",
  name: "Currency Pound Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CurrencyPoundOffOutlineLogo;
