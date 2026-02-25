/**
 * Auto-generated logo component: Currency Hryvnia Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CurrencyHryvniaOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CurrencyHryvniaOutlineLogo = React.forwardRef<SVGSVGElement, CurrencyHryvniaOutlineLogoProps>(
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
      <path d="M8 7a2.64 2.64 0 0 1 2.562 -2h3.376a2.64 2.64 0 0 1 2.562 2a2.57 2.57 0 0 1 -1.344 2.922l-5.876 2.938a3.338 3.338 0 0 0 -1.78 3.64a3.11 3.11 0 0 0 3.05 2.5h2.888a2.64 2.64 0 0 0 2.562 -2" />
  <path d="M6 10h12" />
  <path d="M6 14h12" />
    </svg>
  )
);

CurrencyHryvniaOutlineLogo.displayName = "CurrencyHryvniaOutlineLogo";

export const CurrencyHryvniaOutlineLogoMetadata = {
  id: "currency-hryvnia-outline",
  baseId: "currency-hryvnia-outline",
  variant: "default",
  name: "Currency Hryvnia Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CurrencyHryvniaOutlineLogo;
