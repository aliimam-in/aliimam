/**
 * Auto-generated logo component: Currency Rufiyaa Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CurrencyRufiyaaOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CurrencyRufiyaaOutlineLogo = React.forwardRef<SVGSVGElement, CurrencyRufiyaaOutlineLogoProps>(
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
      <path d="M20 16h.01" />
  <path d="M4 16c9.5 -4 11.5 -8 14 -9" />
  <path d="M12 8l5 3" />
    </svg>
  )
);

CurrencyRufiyaaOutlineLogo.displayName = "CurrencyRufiyaaOutlineLogo";

export const CurrencyRufiyaaOutlineLogoMetadata = {
  id: "currency-rufiyaa-outline",
  baseId: "currency-rufiyaa-outline",
  variant: "default",
  name: "Currency Rufiyaa Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CurrencyRufiyaaOutlineLogo;
