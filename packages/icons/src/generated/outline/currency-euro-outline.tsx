/**
 * Auto-generated logo component: Currency Euro Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CurrencyEuroOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CurrencyEuroOutlineLogo = React.forwardRef<SVGSVGElement, CurrencyEuroOutlineLogoProps>(
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
      <path d="M17.2 7a6 7 0 1 0 0 10" />
  <path d="M13 10h-8m0 4h8" />
    </svg>
  )
);

CurrencyEuroOutlineLogo.displayName = "CurrencyEuroOutlineLogo";

export const CurrencyEuroOutlineLogoMetadata = {
  id: "currency-euro-outline",
  baseId: "currency-euro-outline",
  variant: "default",
  name: "Currency Euro Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CurrencyEuroOutlineLogo;
