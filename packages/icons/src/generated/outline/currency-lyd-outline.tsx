/**
 * Auto-generated logo component: Currency Lyd Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CurrencyLydOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CurrencyLydOutlineLogo = React.forwardRef<SVGSVGElement, CurrencyLydOutlineLogoProps>(
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
      <path d="M11 15h.01" />
  <path d="M21 5v10a2 2 0 0 1 -2 2h-2.764a2 2 0 0 1 -1.789 -1.106l-.447 -.894" />
  <path d="M5 8l2.773 4.687c.427 .697 .234 1.626 -.43 2.075a1.38 1.38 0 0 1 -.773 .238h-2.224a.93 .93 0 0 1 -.673 -.293l-.673 -.707" />
    </svg>
  )
);

CurrencyLydOutlineLogo.displayName = "CurrencyLydOutlineLogo";

export const CurrencyLydOutlineLogoMetadata = {
  id: "currency-lyd-outline",
  baseId: "currency-lyd-outline",
  variant: "default",
  name: "Currency Lyd Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CurrencyLydOutlineLogo;
