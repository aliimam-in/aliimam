/**
 * Auto-generated logo component: Currency Lira Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CurrencyLiraOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CurrencyLiraOutlineLogo = React.forwardRef<SVGSVGElement, CurrencyLiraOutlineLogoProps>(
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
      <path d="M10 5v15a7 7 0 0 0 7 -7" />
  <path d="M6 15l8 -4" />
  <path d="M14 7l-8 4" />
    </svg>
  )
);

CurrencyLiraOutlineLogo.displayName = "CurrencyLiraOutlineLogo";

export const CurrencyLiraOutlineLogoMetadata = {
  id: "currency-lira-outline",
  baseId: "currency-lira-outline",
  variant: "default",
  name: "Currency Lira Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CurrencyLiraOutlineLogo;
