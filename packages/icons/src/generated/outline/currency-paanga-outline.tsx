/**
 * Auto-generated logo component: Currency Paanga Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CurrencyPaangaOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CurrencyPaangaOutlineLogo = React.forwardRef<SVGSVGElement, CurrencyPaangaOutlineLogoProps>(
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
      <path d="M21 6h-4a3 3 0 0 0 0 6h1a3 3 0 0 1 0 6h-4" />
  <path d="M17 20v-2" />
  <path d="M18 6v-2" />
  <path d="M3 6h8" />
  <path d="M7 6v12" />
    </svg>
  )
);

CurrencyPaangaOutlineLogo.displayName = "CurrencyPaangaOutlineLogo";

export const CurrencyPaangaOutlineLogoMetadata = {
  id: "currency-paanga-outline",
  baseId: "currency-paanga-outline",
  variant: "default",
  name: "Currency Paanga Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CurrencyPaangaOutlineLogo;
