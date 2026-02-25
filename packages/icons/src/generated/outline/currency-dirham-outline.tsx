/**
 * Auto-generated logo component: Currency Dirham Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CurrencyDirhamOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CurrencyDirhamOutlineLogo = React.forwardRef<SVGSVGElement, CurrencyDirhamOutlineLogoProps>(
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
      <path d="M8.5 19h-3.5" />
  <path d="M8.599 16.479a1.5 1.5 0 1 0 -1.099 2.521" />
  <path d="M7 4v9" />
  <path d="M15 13h1.888a1.5 1.5 0 0 0 1.296 -2.256l-2.184 -3.744" />
  <path d="M11 13.01v-.01" />
    </svg>
  )
);

CurrencyDirhamOutlineLogo.displayName = "CurrencyDirhamOutlineLogo";

export const CurrencyDirhamOutlineLogoMetadata = {
  id: "currency-dirham-outline",
  baseId: "currency-dirham-outline",
  variant: "default",
  name: "Currency Dirham Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CurrencyDirhamOutlineLogo;
