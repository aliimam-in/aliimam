/**
 * Auto-generated logo component: Currency Dollar Canadian Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CurrencyDollarCanadianOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CurrencyDollarCanadianOutlineLogo = React.forwardRef<SVGSVGElement, CurrencyDollarCanadianOutlineLogoProps>(
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
  <path d="M10 18h-1a6 6 0 1 1 0 -12h1" />
  <path d="M17 20v-2" />
  <path d="M18 6v-2" />
    </svg>
  )
);

CurrencyDollarCanadianOutlineLogo.displayName = "CurrencyDollarCanadianOutlineLogo";

export const CurrencyDollarCanadianOutlineLogoMetadata = {
  id: "currency-dollar-canadian-outline",
  baseId: "currency-dollar-canadian-outline",
  variant: "default",
  name: "Currency Dollar Canadian Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CurrencyDollarCanadianOutlineLogo;
