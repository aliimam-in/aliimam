/**
 * Auto-generated logo component: Currency Dram Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CurrencyDramOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CurrencyDramOutlineLogo = React.forwardRef<SVGSVGElement, CurrencyDramOutlineLogoProps>(
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
      <path d="M4 10a6 6 0 1 1 12 0v10" />
  <path d="M12 16h8" />
  <path d="M12 12h8" />
    </svg>
  )
);

CurrencyDramOutlineLogo.displayName = "CurrencyDramOutlineLogo";

export const CurrencyDramOutlineLogoMetadata = {
  id: "currency-dram-outline",
  baseId: "currency-dram-outline",
  variant: "default",
  name: "Currency Dram Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CurrencyDramOutlineLogo;
