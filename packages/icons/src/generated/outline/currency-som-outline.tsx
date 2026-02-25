/**
 * Auto-generated logo component: Currency Som Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CurrencySomOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CurrencySomOutlineLogo = React.forwardRef<SVGSVGElement, CurrencySomOutlineLogoProps>(
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
      <path d="M10 18v-12h-5v10a2 2 0 0 1 -2 2" />
  <path d="M14 6v12h4a3 3 0 0 0 0 -6h-4h4a3 3 0 0 0 0 -6h-4" />
    </svg>
  )
);

CurrencySomOutlineLogo.displayName = "CurrencySomOutlineLogo";

export const CurrencySomOutlineLogoMetadata = {
  id: "currency-som-outline",
  baseId: "currency-som-outline",
  variant: "default",
  name: "Currency Som Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CurrencySomOutlineLogo;
