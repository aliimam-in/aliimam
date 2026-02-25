/**
 * Auto-generated logo component: Exchange Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ExchangeOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ExchangeOffOutlineLogo = React.forwardRef<SVGSVGElement, ExchangeOffOutlineLogoProps>(
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
  <path d="M19 8v5c0 .594 -.104 1.164 -.294 1.692m-1.692 2.298a4.978 4.978 0 0 1 -3.014 1.01h-3l3 -3" />
  <path d="M14 21l-3 -3" />
  <path d="M5 16v-5c0 -1.632 .782 -3.082 1.992 -4m3.008 -1h3l-3 -3" />
  <path d="M11.501 7.499l1.499 -1.499" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

ExchangeOffOutlineLogo.displayName = "ExchangeOffOutlineLogo";

export const ExchangeOffOutlineLogoMetadata = {
  id: "exchange-off-outline",
  baseId: "exchange-off-outline",
  variant: "default",
  name: "Exchange Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ExchangeOffOutlineLogo;
