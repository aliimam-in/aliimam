/**
 * Auto-generated logo component: Currency Cent Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CurrencyCentOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CurrencyCentOutlineLogo = React.forwardRef<SVGSVGElement, CurrencyCentOutlineLogoProps>(
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
      <path d="M16.007 7.54a5.965 5.965 0 0 0 -4.008 -1.54a6 6 0 0 0 -5.992 6c0 3.314 2.682 6 5.992 6a5.965 5.965 0 0 0 4 -1.536" />
  <path d="M12 20v-2" />
  <path d="M12 6v-2" />
    </svg>
  )
);

CurrencyCentOutlineLogo.displayName = "CurrencyCentOutlineLogo";

export const CurrencyCentOutlineLogoMetadata = {
  id: "currency-cent-outline",
  baseId: "currency-cent-outline",
  variant: "default",
  name: "Currency Cent Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CurrencyCentOutlineLogo;
