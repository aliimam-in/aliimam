/**
 * Auto-generated logo component: Exchange Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ExchangeOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ExchangeOutlineLogo = React.forwardRef<SVGSVGElement, ExchangeOutlineLogoProps>(
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
      <path d="M3 18a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  <path d="M17 6a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  <path d="M19 8v5a5 5 0 0 1 -5 5h-3l3 -3m0 6l-3 -3" />
  <path d="M5 16v-5a5 5 0 0 1 5 -5h3l-3 -3m0 6l3 -3" />
    </svg>
  )
);

ExchangeOutlineLogo.displayName = "ExchangeOutlineLogo";

export const ExchangeOutlineLogoMetadata = {
  id: "exchange-outline",
  baseId: "exchange-outline",
  variant: "default",
  name: "Exchange Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ExchangeOutlineLogo;
