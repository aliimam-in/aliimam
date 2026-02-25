/**
 * Auto-generated logo component: Currency Rupee Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CurrencyRupeeOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CurrencyRupeeOutlineLogo = React.forwardRef<SVGSVGElement, CurrencyRupeeOutlineLogoProps>(
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
      <path d="M18 5h-11h3a4 4 0 0 1 0 8h-3l6 6" />
  <path d="M7 9l11 0" />
    </svg>
  )
);

CurrencyRupeeOutlineLogo.displayName = "CurrencyRupeeOutlineLogo";

export const CurrencyRupeeOutlineLogoMetadata = {
  id: "currency-rupee-outline",
  baseId: "currency-rupee-outline",
  variant: "default",
  name: "Currency Rupee Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CurrencyRupeeOutlineLogo;
