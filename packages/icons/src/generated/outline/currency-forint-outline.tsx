/**
 * Auto-generated logo component: Currency Forint Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CurrencyForintOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CurrencyForintOutlineLogo = React.forwardRef<SVGSVGElement, CurrencyForintOutlineLogoProps>(
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
      <path d="M11 4h-4a3 3 0 0 0 -3 3v12" />
  <path d="M10 11h-6" />
  <path d="M16 4v13a2 2 0 0 0 2 2h2" />
  <path d="M19 9h-5" />
    </svg>
  )
);

CurrencyForintOutlineLogo.displayName = "CurrencyForintOutlineLogo";

export const CurrencyForintOutlineLogoMetadata = {
  id: "currency-forint-outline",
  baseId: "currency-forint-outline",
  variant: "default",
  name: "Currency Forint Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CurrencyForintOutlineLogo;
