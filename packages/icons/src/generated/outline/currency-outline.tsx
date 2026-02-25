/**
 * Auto-generated logo component: Currency Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CurrencyOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CurrencyOutlineLogo = React.forwardRef<SVGSVGElement, CurrencyOutlineLogoProps>(
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
      <path d="M5 12a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
  <path d="M4 4l3 3" />
  <path d="M20 4l-3 3" />
  <path d="M4 20l3 -3" />
  <path d="M20 20l-3 -3" />
    </svg>
  )
);

CurrencyOutlineLogo.displayName = "CurrencyOutlineLogo";

export const CurrencyOutlineLogoMetadata = {
  id: "currency-outline",
  baseId: "currency-outline",
  variant: "default",
  name: "Currency Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CurrencyOutlineLogo;
