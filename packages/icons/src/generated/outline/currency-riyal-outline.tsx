/**
 * Auto-generated logo component: Currency Riyal Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CurrencyRiyalOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CurrencyRiyalOutlineLogo = React.forwardRef<SVGSVGElement, CurrencyRiyalOutlineLogoProps>(
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
      <path d="M15 9v2a2 2 0 1 1 -4 0v-1v1a2 2 0 1 1 -4 0v-1v4a2 2 0 1 1 -4 0v-2" />
  <path d="M18 12.01v-.01" />
  <path d="M22 10v1a5 5 0 0 1 -5 5" />
    </svg>
  )
);

CurrencyRiyalOutlineLogo.displayName = "CurrencyRiyalOutlineLogo";

export const CurrencyRiyalOutlineLogoMetadata = {
  id: "currency-riyal-outline",
  baseId: "currency-riyal-outline",
  variant: "default",
  name: "Currency Riyal Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CurrencyRiyalOutlineLogo;
