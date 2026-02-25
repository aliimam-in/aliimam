/**
 * Auto-generated logo component: Currency Quetzal Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CurrencyQuetzalOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CurrencyQuetzalOutlineLogo = React.forwardRef<SVGSVGElement, CurrencyQuetzalOutlineLogoProps>(
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
      <path d="M6 12a6 6 0 1 0 12 0a6 6 0 1 0 -12 0" />
  <path d="M13 13l5 5" />
    </svg>
  )
);

CurrencyQuetzalOutlineLogo.displayName = "CurrencyQuetzalOutlineLogo";

export const CurrencyQuetzalOutlineLogoMetadata = {
  id: "currency-quetzal-outline",
  baseId: "currency-quetzal-outline",
  variant: "default",
  name: "Currency Quetzal Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CurrencyQuetzalOutlineLogo;
