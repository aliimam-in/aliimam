/**
 * Auto-generated logo component: Currency Krone Danish Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CurrencyKroneDanishOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CurrencyKroneDanishOutlineLogo = React.forwardRef<SVGSVGElement, CurrencyKroneDanishOutlineLogoProps>(
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
      <path d="M5 6v12" />
  <path d="M5 12c3.5 0 6 -3 6 -6" />
  <path d="M5 12c3.5 0 6 3 6 6" />
  <path d="M15 10v8" />
  <path d="M19 10a4 4 0 0 0 -4 4" />
  <path d="M20 18.01v-.01" />
    </svg>
  )
);

CurrencyKroneDanishOutlineLogo.displayName = "CurrencyKroneDanishOutlineLogo";

export const CurrencyKroneDanishOutlineLogoMetadata = {
  id: "currency-krone-danish-outline",
  baseId: "currency-krone-danish-outline",
  variant: "default",
  name: "Currency Krone Danish Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CurrencyKroneDanishOutlineLogo;
