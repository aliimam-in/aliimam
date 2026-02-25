/**
 * Auto-generated logo component: Currency Krone Swedish Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CurrencyKroneSwedishOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CurrencyKroneSwedishOutlineLogo = React.forwardRef<SVGSVGElement, CurrencyKroneSwedishOutlineLogoProps>(
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
    </svg>
  )
);

CurrencyKroneSwedishOutlineLogo.displayName = "CurrencyKroneSwedishOutlineLogo";

export const CurrencyKroneSwedishOutlineLogoMetadata = {
  id: "currency-krone-swedish-outline",
  baseId: "currency-krone-swedish-outline",
  variant: "default",
  name: "Currency Krone Swedish Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CurrencyKroneSwedishOutlineLogo;
