/**
 * Auto-generated logo component: Currency Lari Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CurrencyLariOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CurrencyLariOutlineLogo = React.forwardRef<SVGSVGElement, CurrencyLariOutlineLogoProps>(
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
      <path d="M18 13a6 6 0 1 0 -6 6" />
  <path d="M6 19h12" />
  <path d="M10 5v7" />
  <path d="M14 12v-7" />
    </svg>
  )
);

CurrencyLariOutlineLogo.displayName = "CurrencyLariOutlineLogo";

export const CurrencyLariOutlineLogoMetadata = {
  id: "currency-lari-outline",
  baseId: "currency-lari-outline",
  variant: "default",
  name: "Currency Lari Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CurrencyLariOutlineLogo;
