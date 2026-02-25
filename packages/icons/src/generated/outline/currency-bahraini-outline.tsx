/**
 * Auto-generated logo component: Currency Bahraini Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CurrencyBahrainiOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CurrencyBahrainiOutlineLogo = React.forwardRef<SVGSVGElement, CurrencyBahrainiOutlineLogoProps>(
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
      <path d="M3 10v1a4 4 0 0 0 4 4h2a2 2 0 0 0 2 -2v-3" />
  <path d="M7 19.01v-.01" />
  <path d="M14 15.01v-.01" />
  <path d="M17 15h2a2 2 0 0 0 1.649 -3.131l-2.653 -3.869" />
    </svg>
  )
);

CurrencyBahrainiOutlineLogo.displayName = "CurrencyBahrainiOutlineLogo";

export const CurrencyBahrainiOutlineLogoMetadata = {
  id: "currency-bahraini-outline",
  baseId: "currency-bahraini-outline",
  variant: "default",
  name: "Currency Bahraini Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CurrencyBahrainiOutlineLogo;
