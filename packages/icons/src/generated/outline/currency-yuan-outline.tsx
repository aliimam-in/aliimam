/**
 * Auto-generated logo component: Currency Yuan Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CurrencyYuanOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CurrencyYuanOutlineLogo = React.forwardRef<SVGSVGElement, CurrencyYuanOutlineLogoProps>(
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
      <path d="M12 19v-7l-5 -7" />
  <path d="M17 5l-5 7" />
  <path d="M8 13h8" />
    </svg>
  )
);

CurrencyYuanOutlineLogo.displayName = "CurrencyYuanOutlineLogo";

export const CurrencyYuanOutlineLogoMetadata = {
  id: "currency-yuan-outline",
  baseId: "currency-yuan-outline",
  variant: "default",
  name: "Currency Yuan Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CurrencyYuanOutlineLogo;
