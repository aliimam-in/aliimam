/**
 * Auto-generated logo component: Cash Banknote Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CashBanknoteOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CashBanknoteOutlineLogo = React.forwardRef<SVGSVGElement, CashBanknoteOutlineLogoProps>(
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
      <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
  <path d="M3 8a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2l0 -8" />
  <path d="M18 12h.01" />
  <path d="M6 12h.01" />
    </svg>
  )
);

CashBanknoteOutlineLogo.displayName = "CashBanknoteOutlineLogo";

export const CashBanknoteOutlineLogoMetadata = {
  id: "cash-banknote-outline",
  baseId: "cash-banknote-outline",
  variant: "default",
  name: "Cash Banknote Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CashBanknoteOutlineLogo;
