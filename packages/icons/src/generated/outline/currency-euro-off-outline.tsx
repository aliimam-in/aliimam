/**
 * Auto-generated logo component: Currency Euro Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CurrencyEuroOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CurrencyEuroOffOutlineLogo = React.forwardRef<SVGSVGElement, CurrencyEuroOffOutlineLogoProps>(
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
      <path d="M17.2 7c-1.977 -2.26 -4.954 -2.602 -7.234 -1.04m-1.913 2.079c-1.604 2.72 -1.374 6.469 .69 8.894c2.292 2.691 6 2.758 8.356 .18" />
  <path d="M10 10h-5m0 4h8" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

CurrencyEuroOffOutlineLogo.displayName = "CurrencyEuroOffOutlineLogo";

export const CurrencyEuroOffOutlineLogoMetadata = {
  id: "currency-euro-off-outline",
  baseId: "currency-euro-off-outline",
  variant: "default",
  name: "Currency Euro Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CurrencyEuroOffOutlineLogo;
