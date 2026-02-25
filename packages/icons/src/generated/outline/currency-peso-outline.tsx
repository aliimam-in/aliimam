/**
 * Auto-generated logo component: Currency Peso Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CurrencyPesoOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CurrencyPesoOutlineLogo = React.forwardRef<SVGSVGElement, CurrencyPesoOutlineLogoProps>(
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
      <path d="M8 19v-14h3.5a4.5 4.5 0 1 1 0 9h-3.5" />
  <path d="M18 8h-12" />
  <path d="M18 11h-12" />
    </svg>
  )
);

CurrencyPesoOutlineLogo.displayName = "CurrencyPesoOutlineLogo";

export const CurrencyPesoOutlineLogoMetadata = {
  id: "currency-peso-outline",
  baseId: "currency-peso-outline",
  variant: "default",
  name: "Currency Peso Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CurrencyPesoOutlineLogo;
