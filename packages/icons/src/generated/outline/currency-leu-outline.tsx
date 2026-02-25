/**
 * Auto-generated logo component: Currency Leu Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CurrencyLeuOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CurrencyLeuOutlineLogo = React.forwardRef<SVGSVGElement, CurrencyLeuOutlineLogoProps>(
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
      <path d="M17 18h-7a3 3 0 0 1 -3 -3v-10" />
    </svg>
  )
);

CurrencyLeuOutlineLogo.displayName = "CurrencyLeuOutlineLogo";

export const CurrencyLeuOutlineLogoMetadata = {
  id: "currency-leu-outline",
  baseId: "currency-leu-outline",
  variant: "default",
  name: "Currency Leu Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CurrencyLeuOutlineLogo;
