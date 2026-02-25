/**
 * Auto-generated logo component: Currency Dollar Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CurrencyDollarOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CurrencyDollarOffOutlineLogo = React.forwardRef<SVGSVGElement, CurrencyDollarOffOutlineLogoProps>(
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
      <path d="M16.7 8a3 3 0 0 0 -2.7 -2h-4m-2.557 1.431a3 3 0 0 0 2.557 4.569h2m4.564 4.558a3 3 0 0 1 -2.564 1.442h-4a3 3 0 0 1 -2.7 -2" />
  <path d="M12 3v3m0 12v3" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

CurrencyDollarOffOutlineLogo.displayName = "CurrencyDollarOffOutlineLogo";

export const CurrencyDollarOffOutlineLogoMetadata = {
  id: "currency-dollar-off-outline",
  baseId: "currency-dollar-off-outline",
  variant: "default",
  name: "Currency Dollar Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CurrencyDollarOffOutlineLogo;
