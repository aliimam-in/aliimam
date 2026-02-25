/**
 * Auto-generated logo component: Currency Xrp Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CurrencyXrpOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CurrencyXrpOutlineLogo = React.forwardRef<SVGSVGElement, CurrencyXrpOutlineLogoProps>(
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
      <path d="M5 5l3.585 3.585a4.83 4.83 0 0 0 6.83 0l3.585 -3.585" />
  <path d="M5 19l3.585 -3.585a4.83 4.83 0 0 1 6.83 0l3.585 3.584" />
    </svg>
  )
);

CurrencyXrpOutlineLogo.displayName = "CurrencyXrpOutlineLogo";

export const CurrencyXrpOutlineLogoMetadata = {
  id: "currency-xrp-outline",
  baseId: "currency-xrp-outline",
  variant: "default",
  name: "Currency Xrp Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CurrencyXrpOutlineLogo;
