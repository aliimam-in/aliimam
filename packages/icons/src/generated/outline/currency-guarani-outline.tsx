/**
 * Auto-generated logo component: Currency Guarani Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CurrencyGuaraniOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CurrencyGuaraniOutlineLogo = React.forwardRef<SVGSVGElement, CurrencyGuaraniOutlineLogoProps>(
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
      <path d="M16.007 7.54a5.965 5.965 0 0 0 -4.008 -1.54a6 6 0 0 0 -5.992 6c0 3.314 2.682 6 5.992 6a5.965 5.965 0 0 0 4 -1.536c.732 -.66 1.064 -2.148 1 -4.464h-5" />
  <path d="M12 20v-16" />
    </svg>
  )
);

CurrencyGuaraniOutlineLogo.displayName = "CurrencyGuaraniOutlineLogo";

export const CurrencyGuaraniOutlineLogoMetadata = {
  id: "currency-guarani-outline",
  baseId: "currency-guarani-outline",
  variant: "default",
  name: "Currency Guarani Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CurrencyGuaraniOutlineLogo;
