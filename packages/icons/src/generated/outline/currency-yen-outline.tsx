/**
 * Auto-generated logo component: Currency Yen Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CurrencyYenOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CurrencyYenOutlineLogo = React.forwardRef<SVGSVGElement, CurrencyYenOutlineLogoProps>(
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
      <path d="M12 19v-7l-5 -7m10 0l-5 7" />
  <path d="M8 17l8 0" />
  <path d="M8 13l8 0" />
    </svg>
  )
);

CurrencyYenOutlineLogo.displayName = "CurrencyYenOutlineLogo";

export const CurrencyYenOutlineLogoMetadata = {
  id: "currency-yen-outline",
  baseId: "currency-yen-outline",
  variant: "default",
  name: "Currency Yen Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CurrencyYenOutlineLogo;
