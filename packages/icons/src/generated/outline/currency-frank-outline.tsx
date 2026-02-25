/**
 * Auto-generated logo component: Currency Frank Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CurrencyFrankOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CurrencyFrankOutlineLogo = React.forwardRef<SVGSVGElement, CurrencyFrankOutlineLogoProps>(
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
      <path d="M17 5h-6a2 2 0 0 0 -2 2v12" />
  <path d="M7 15h4" />
  <path d="M9 11h7" />
    </svg>
  )
);

CurrencyFrankOutlineLogo.displayName = "CurrencyFrankOutlineLogo";

export const CurrencyFrankOutlineLogoMetadata = {
  id: "currency-frank-outline",
  baseId: "currency-frank-outline",
  variant: "default",
  name: "Currency Frank Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CurrencyFrankOutlineLogo;
