/**
 * Auto-generated logo component: Currency Taka Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CurrencyTakaOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CurrencyTakaOutlineLogo = React.forwardRef<SVGSVGElement, CurrencyTakaOutlineLogoProps>(
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
      <path d="M15.5 15.5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
  <path d="M7 7a2 2 0 1 1 4 0v9a3 3 0 0 0 6 0v-.5" />
  <path d="M8 11h6" />
    </svg>
  )
);

CurrencyTakaOutlineLogo.displayName = "CurrencyTakaOutlineLogo";

export const CurrencyTakaOutlineLogoMetadata = {
  id: "currency-taka-outline",
  baseId: "currency-taka-outline",
  variant: "default",
  name: "Currency Taka Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CurrencyTakaOutlineLogo;
