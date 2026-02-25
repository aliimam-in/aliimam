/**
 * Auto-generated logo component: Currency Kip Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CurrencyKipOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CurrencyKipOutlineLogo = React.forwardRef<SVGSVGElement, CurrencyKipOutlineLogoProps>(
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
      <path d="M6 12h12" />
  <path d="M9 5v14" />
  <path d="M16 19a7 7 0 0 0 -7 -7a7 7 0 0 0 7 -7" />
    </svg>
  )
);

CurrencyKipOutlineLogo.displayName = "CurrencyKipOutlineLogo";

export const CurrencyKipOutlineLogoMetadata = {
  id: "currency-kip-outline",
  baseId: "currency-kip-outline",
  variant: "default",
  name: "Currency Kip Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CurrencyKipOutlineLogo;
