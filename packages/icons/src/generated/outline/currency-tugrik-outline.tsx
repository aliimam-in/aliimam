/**
 * Auto-generated logo component: Currency Tugrik Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CurrencyTugrikOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CurrencyTugrikOutlineLogo = React.forwardRef<SVGSVGElement, CurrencyTugrikOutlineLogoProps>(
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
      <path d="M7 6h10" />
  <path d="M12 6v13" />
  <path d="M8 17l8 -3" />
  <path d="M16 10l-8 3" />
    </svg>
  )
);

CurrencyTugrikOutlineLogo.displayName = "CurrencyTugrikOutlineLogo";

export const CurrencyTugrikOutlineLogoMetadata = {
  id: "currency-tugrik-outline",
  baseId: "currency-tugrik-outline",
  variant: "default",
  name: "Currency Tugrik Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CurrencyTugrikOutlineLogo;
