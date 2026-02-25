/**
 * Auto-generated logo component: Currency Ripple Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CurrencyRippleOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CurrencyRippleOutlineLogo = React.forwardRef<SVGSVGElement, CurrencyRippleOutlineLogoProps>(
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
      <path d="M4 12a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
  <path d="M14 7a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
  <path d="M14 17a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
  <path d="M10 12h3l2 -2.5" />
  <path d="M15 14.5l-2 -2.5" />
    </svg>
  )
);

CurrencyRippleOutlineLogo.displayName = "CurrencyRippleOutlineLogo";

export const CurrencyRippleOutlineLogoMetadata = {
  id: "currency-ripple-outline",
  baseId: "currency-ripple-outline",
  variant: "default",
  name: "Currency Ripple Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CurrencyRippleOutlineLogo;
