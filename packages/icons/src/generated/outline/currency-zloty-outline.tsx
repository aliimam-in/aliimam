/**
 * Auto-generated logo component: Currency Zloty Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CurrencyZlotyOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CurrencyZlotyOutlineLogo = React.forwardRef<SVGSVGElement, CurrencyZlotyOutlineLogoProps>(
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
      <path d="M12 18h-7l7 -7h-7" />
  <path d="M17 18v-13" />
  <path d="M14 14.5l6 -3.5" />
    </svg>
  )
);

CurrencyZlotyOutlineLogo.displayName = "CurrencyZlotyOutlineLogo";

export const CurrencyZlotyOutlineLogoMetadata = {
  id: "currency-zloty-outline",
  baseId: "currency-zloty-outline",
  variant: "default",
  name: "Currency Zloty Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CurrencyZlotyOutlineLogo;
