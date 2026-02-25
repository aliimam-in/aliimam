/**
 * Auto-generated logo component: Currency Dong Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CurrencyDongOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CurrencyDongOutlineLogo = React.forwardRef<SVGSVGElement, CurrencyDongOutlineLogoProps>(
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
      <path d="M6 19h12" />
  <path d="M8 12a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
  <path d="M16 16v-12" />
  <path d="M17 5h-4" />
    </svg>
  )
);

CurrencyDongOutlineLogo.displayName = "CurrencyDongOutlineLogo";

export const CurrencyDongOutlineLogoMetadata = {
  id: "currency-dong-outline",
  baseId: "currency-dong-outline",
  variant: "default",
  name: "Currency Dong Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CurrencyDongOutlineLogo;
