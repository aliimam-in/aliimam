/**
 * Auto-generated logo component: Currency Krone Czech Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CurrencyKroneCzechOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CurrencyKroneCzechOutlineLogo = React.forwardRef<SVGSVGElement, CurrencyKroneCzechOutlineLogoProps>(
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
  <path d="M19 6l-2 2l-2 -2" />
  <path d="M19 12h-2a3 3 0 0 0 0 6h2" />
    </svg>
  )
);

CurrencyKroneCzechOutlineLogo.displayName = "CurrencyKroneCzechOutlineLogo";

export const CurrencyKroneCzechOutlineLogoMetadata = {
  id: "currency-krone-czech-outline",
  baseId: "currency-krone-czech-outline",
  variant: "default",
  name: "Currency Krone Czech Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CurrencyKroneCzechOutlineLogo;
