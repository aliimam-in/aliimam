/**
 * Auto-generated logo component: Currency Baht Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CurrencyBahtOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CurrencyBahtOutlineLogo = React.forwardRef<SVGSVGElement, CurrencyBahtOutlineLogoProps>(
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
      <path d="M8 6h5a3 3 0 0 1 3 3v.143a2.857 2.857 0 0 1 -2.857 2.857h-5.143" />
  <path d="M8 12h5a3 3 0 0 1 3 3v.143a2.857 2.857 0 0 1 -2.857 2.857h-5.143" />
  <path d="M8 6v12" />
  <path d="M11 4v2" />
  <path d="M11 18v2" />
    </svg>
  )
);

CurrencyBahtOutlineLogo.displayName = "CurrencyBahtOutlineLogo";

export const CurrencyBahtOutlineLogoMetadata = {
  id: "currency-baht-outline",
  baseId: "currency-baht-outline",
  variant: "default",
  name: "Currency Baht Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CurrencyBahtOutlineLogo;
