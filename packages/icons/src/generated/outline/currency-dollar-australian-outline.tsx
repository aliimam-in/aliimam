/**
 * Auto-generated logo component: Currency Dollar Australian Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CurrencyDollarAustralianOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CurrencyDollarAustralianOutlineLogo = React.forwardRef<SVGSVGElement, CurrencyDollarAustralianOutlineLogoProps>(
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
      <path d="M3 18l3.279 -11.476a.75 .75 0 0 1 1.442 0l3.279 11.476" />
  <path d="M21 6h-4a3 3 0 0 0 0 6h1a3 3 0 0 1 0 6h-4" />
  <path d="M17 20v-2" />
  <path d="M18 6v-2" />
  <path d="M4.5 14h5" />
    </svg>
  )
);

CurrencyDollarAustralianOutlineLogo.displayName = "CurrencyDollarAustralianOutlineLogo";

export const CurrencyDollarAustralianOutlineLogoMetadata = {
  id: "currency-dollar-australian-outline",
  baseId: "currency-dollar-australian-outline",
  variant: "default",
  name: "Currency Dollar Australian Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CurrencyDollarAustralianOutlineLogo;
