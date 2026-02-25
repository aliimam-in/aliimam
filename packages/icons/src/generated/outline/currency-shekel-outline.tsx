/**
 * Auto-generated logo component: Currency Shekel Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CurrencyShekelOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CurrencyShekelOutlineLogo = React.forwardRef<SVGSVGElement, CurrencyShekelOutlineLogoProps>(
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
      <path d="M6 18v-12h4a4 4 0 0 1 4 4v4" />
  <path d="M18 6v12h-4a4 4 0 0 1 -4 -4v-4" />
    </svg>
  )
);

CurrencyShekelOutlineLogo.displayName = "CurrencyShekelOutlineLogo";

export const CurrencyShekelOutlineLogoMetadata = {
  id: "currency-shekel-outline",
  baseId: "currency-shekel-outline",
  variant: "default",
  name: "Currency Shekel Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CurrencyShekelOutlineLogo;
