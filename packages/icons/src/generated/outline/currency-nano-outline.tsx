/**
 * Auto-generated logo component: Currency Nano Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CurrencyNanoOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CurrencyNanoOutlineLogo = React.forwardRef<SVGSVGElement, CurrencyNanoOutlineLogoProps>(
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
      <path d="M7 20l10 -16" />
  <path d="M7 12h10" />
  <path d="M7 16h10" />
  <path d="M17 20l-10 -16" />
    </svg>
  )
);

CurrencyNanoOutlineLogo.displayName = "CurrencyNanoOutlineLogo";

export const CurrencyNanoOutlineLogoMetadata = {
  id: "currency-nano-outline",
  baseId: "currency-nano-outline",
  variant: "default",
  name: "Currency Nano Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CurrencyNanoOutlineLogo;
