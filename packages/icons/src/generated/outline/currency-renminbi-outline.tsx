/**
 * Auto-generated logo component: Currency Renminbi Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CurrencyRenminbiOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CurrencyRenminbiOutlineLogo = React.forwardRef<SVGSVGElement, CurrencyRenminbiOutlineLogoProps>(
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
      <path d="M15 9v8a2 2 0 1 0 4 0" />
  <path d="M19 9h-14" />
  <path d="M19 5h-14" />
  <path d="M9 9v4c0 2.5 -.667 4 -2 6" />
    </svg>
  )
);

CurrencyRenminbiOutlineLogo.displayName = "CurrencyRenminbiOutlineLogo";

export const CurrencyRenminbiOutlineLogoMetadata = {
  id: "currency-renminbi-outline",
  baseId: "currency-renminbi-outline",
  variant: "default",
  name: "Currency Renminbi Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CurrencyRenminbiOutlineLogo;
