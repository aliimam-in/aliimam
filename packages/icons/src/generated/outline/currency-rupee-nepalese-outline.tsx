/**
 * Auto-generated logo component: Currency Rupee Nepalese Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CurrencyRupeeNepaleseOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CurrencyRupeeNepaleseOutlineLogo = React.forwardRef<SVGSVGElement, CurrencyRupeeNepaleseOutlineLogoProps>(
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
      <path d="M15 5h-11h3a4 4 0 1 1 0 8h-3l6 6" />
  <path d="M21 17l-4.586 -4.414a2 2 0 0 0 -2.828 2.828l.707 .707" />
    </svg>
  )
);

CurrencyRupeeNepaleseOutlineLogo.displayName = "CurrencyRupeeNepaleseOutlineLogo";

export const CurrencyRupeeNepaleseOutlineLogoMetadata = {
  id: "currency-rupee-nepalese-outline",
  baseId: "currency-rupee-nepalese-outline",
  variant: "default",
  name: "Currency Rupee Nepalese Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CurrencyRupeeNepaleseOutlineLogo;
