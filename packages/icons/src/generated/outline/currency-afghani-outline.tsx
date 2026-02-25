/**
 * Auto-generated logo component: Currency Afghani Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CurrencyAfghaniOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CurrencyAfghaniOutlineLogo = React.forwardRef<SVGSVGElement, CurrencyAfghaniOutlineLogoProps>(
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
      <path d="M15 13h-3.5a3.5 3.5 0 1 1 3.5 -3.5v6.5h-7" />
  <path d="M12 3v.01" />
  <path d="M12 19v2" />
    </svg>
  )
);

CurrencyAfghaniOutlineLogo.displayName = "CurrencyAfghaniOutlineLogo";

export const CurrencyAfghaniOutlineLogoMetadata = {
  id: "currency-afghani-outline",
  baseId: "currency-afghani-outline",
  variant: "default",
  name: "Currency Afghani Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CurrencyAfghaniOutlineLogo;
