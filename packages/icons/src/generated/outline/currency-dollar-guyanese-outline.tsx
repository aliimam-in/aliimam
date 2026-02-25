/**
 * Auto-generated logo component: Currency Dollar Guyanese Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CurrencyDollarGuyaneseOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CurrencyDollarGuyaneseOutlineLogo = React.forwardRef<SVGSVGElement, CurrencyDollarGuyaneseOutlineLogoProps>(
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
  <path d="M10 6h-3a4 4 0 0 0 -4 4v4a4 4 0 0 0 4 4h3v-6h-2" />
  <path d="M17 20v-2" />
  <path d="M18 6v-2" />
    </svg>
  )
);

CurrencyDollarGuyaneseOutlineLogo.displayName = "CurrencyDollarGuyaneseOutlineLogo";

export const CurrencyDollarGuyaneseOutlineLogoMetadata = {
  id: "currency-dollar-guyanese-outline",
  baseId: "currency-dollar-guyanese-outline",
  variant: "default",
  name: "Currency Dollar Guyanese Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CurrencyDollarGuyaneseOutlineLogo;
