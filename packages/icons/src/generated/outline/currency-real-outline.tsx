/**
 * Auto-generated logo component: Currency Real Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CurrencyRealOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CurrencyRealOutlineLogo = React.forwardRef<SVGSVGElement, CurrencyRealOutlineLogoProps>(
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
      <path d="M21 6h-4a3 3 0 0 0 0 6h1a3 3 0 0 1 0 6h-4" />
  <path d="M4 18v-12h3a3 3 0 1 1 0 6h-3c5.5 0 5 4 6 6" />
  <path d="M18 6v-2" />
  <path d="M17 20v-2" />
    </svg>
  )
);

CurrencyRealOutlineLogo.displayName = "CurrencyRealOutlineLogo";

export const CurrencyRealOutlineLogoMetadata = {
  id: "currency-real-outline",
  baseId: "currency-real-outline",
  variant: "default",
  name: "Currency Real Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CurrencyRealOutlineLogo;
