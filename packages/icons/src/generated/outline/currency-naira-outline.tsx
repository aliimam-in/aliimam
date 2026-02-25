/**
 * Auto-generated logo component: Currency Naira Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CurrencyNairaOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CurrencyNairaOutlineLogo = React.forwardRef<SVGSVGElement, CurrencyNairaOutlineLogoProps>(
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
      <path d="M7 18v-10.948a1.05 1.05 0 0 1 1.968 -.51l6.064 10.916a1.05 1.05 0 0 0 1.968 -.51v-10.948" />
  <path d="M5 10h14" />
  <path d="M5 14h14" />
    </svg>
  )
);

CurrencyNairaOutlineLogo.displayName = "CurrencyNairaOutlineLogo";

export const CurrencyNairaOutlineLogoMetadata = {
  id: "currency-naira-outline",
  baseId: "currency-naira-outline",
  variant: "default",
  name: "Currency Naira Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CurrencyNairaOutlineLogo;
