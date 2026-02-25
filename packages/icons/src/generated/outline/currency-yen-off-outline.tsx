/**
 * Auto-generated logo component: Currency Yen Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CurrencyYenOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CurrencyYenOffOutlineLogo = React.forwardRef<SVGSVGElement, CurrencyYenOffOutlineLogoProps>(
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
      <path d="M12 19v-7m5 -7l-3.328 4.66" />
  <path d="M8 17h8" />
  <path d="M8 13h5" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

CurrencyYenOffOutlineLogo.displayName = "CurrencyYenOffOutlineLogo";

export const CurrencyYenOffOutlineLogoMetadata = {
  id: "currency-yen-off-outline",
  baseId: "currency-yen-off-outline",
  variant: "default",
  name: "Currency Yen Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CurrencyYenOffOutlineLogo;
