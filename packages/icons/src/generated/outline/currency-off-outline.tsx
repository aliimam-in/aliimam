/**
 * Auto-generated logo component: Currency Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CurrencyOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CurrencyOffOutlineLogo = React.forwardRef<SVGSVGElement, CurrencyOffOutlineLogoProps>(
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
      <path d="M18.531 14.524a7 7 0 0 0 -9.06 -9.053m-2.422 1.582a7 7 0 0 0 9.903 9.896" />
  <path d="M4 4l3 3" />
  <path d="M20 4l-3 3" />
  <path d="M4 20l3 -3" />
  <path d="M20 20l-3 -3" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

CurrencyOffOutlineLogo.displayName = "CurrencyOffOutlineLogo";

export const CurrencyOffOutlineLogoMetadata = {
  id: "currency-off-outline",
  baseId: "currency-off-outline",
  variant: "default",
  name: "Currency Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CurrencyOffOutlineLogo;
