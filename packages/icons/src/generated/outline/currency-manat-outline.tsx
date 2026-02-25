/**
 * Auto-generated logo component: Currency Manat Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CurrencyManatOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CurrencyManatOutlineLogo = React.forwardRef<SVGSVGElement, CurrencyManatOutlineLogoProps>(
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
      <path d="M7 19v-7a5 5 0 1 1 10 0v7" />
  <path d="M12 5v14" />
    </svg>
  )
);

CurrencyManatOutlineLogo.displayName = "CurrencyManatOutlineLogo";

export const CurrencyManatOutlineLogoMetadata = {
  id: "currency-manat-outline",
  baseId: "currency-manat-outline",
  variant: "default",
  name: "Currency Manat Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CurrencyManatOutlineLogo;
