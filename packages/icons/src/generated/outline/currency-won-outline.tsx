/**
 * Auto-generated logo component: Currency Won Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CurrencyWonOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CurrencyWonOutlineLogo = React.forwardRef<SVGSVGElement, CurrencyWonOutlineLogoProps>(
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
      <path d="M4 6l3.245 11.358a.85 .85 0 0 0 1.624 .035l3.131 -9.393l3.131 9.393a.85 .85 0 0 0 1.624 -.035l3.245 -11.358" />
  <path d="M21 10h-18" />
  <path d="M21 14h-18" />
    </svg>
  )
);

CurrencyWonOutlineLogo.displayName = "CurrencyWonOutlineLogo";

export const CurrencyWonOutlineLogoMetadata = {
  id: "currency-won-outline",
  baseId: "currency-won-outline",
  variant: "default",
  name: "Currency Won Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CurrencyWonOutlineLogo;
