/**
 * Auto-generated logo component: Currency Rubel Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CurrencyRubelOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CurrencyRubelOutlineLogo = React.forwardRef<SVGSVGElement, CurrencyRubelOutlineLogoProps>(
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
      <path d="M8 19v-14h6a3 3 0 0 1 0 6h-8" />
  <path d="M14 15h-8" />
    </svg>
  )
);

CurrencyRubelOutlineLogo.displayName = "CurrencyRubelOutlineLogo";

export const CurrencyRubelOutlineLogoMetadata = {
  id: "currency-rubel-outline",
  baseId: "currency-rubel-outline",
  variant: "default",
  name: "Currency Rubel Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CurrencyRubelOutlineLogo;
