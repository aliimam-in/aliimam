/**
 * Auto-generated logo component: Currency Tenge Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CurrencyTengeOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CurrencyTengeOutlineLogo = React.forwardRef<SVGSVGElement, CurrencyTengeOutlineLogoProps>(
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
      <path d="M6 5h12" />
  <path d="M6 9h12" />
  <path d="M12 9v10" />
    </svg>
  )
);

CurrencyTengeOutlineLogo.displayName = "CurrencyTengeOutlineLogo";

export const CurrencyTengeOutlineLogoMetadata = {
  id: "currency-tenge-outline",
  baseId: "currency-tenge-outline",
  variant: "default",
  name: "Currency Tenge Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CurrencyTengeOutlineLogo;
