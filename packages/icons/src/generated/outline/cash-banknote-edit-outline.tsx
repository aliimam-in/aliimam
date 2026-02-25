/**
 * Auto-generated logo component: Cash Banknote Edit Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CashBanknoteEditOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CashBanknoteEditOutlineLogo = React.forwardRef<SVGSVGElement, CashBanknoteEditOutlineLogoProps>(
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
      <path d="M11 18h-6a2 2 0 0 1 -2 -2v-8a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v3" />
  <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
  <path d="M6 12h.01" />
  <path d="M18.42 15.61a2.1 2.1 0 1 1 2.97 2.97l-3.39 3.42h-3v-3l3.42 -3.39" />
    </svg>
  )
);

CashBanknoteEditOutlineLogo.displayName = "CashBanknoteEditOutlineLogo";

export const CashBanknoteEditOutlineLogoMetadata = {
  id: "cash-banknote-edit-outline",
  baseId: "cash-banknote-edit-outline",
  variant: "default",
  name: "Cash Banknote Edit Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CashBanknoteEditOutlineLogo;
