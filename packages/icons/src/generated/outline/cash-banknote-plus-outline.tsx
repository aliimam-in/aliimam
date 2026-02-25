/**
 * Auto-generated logo component: Cash Banknote Plus Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CashBanknotePlusOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CashBanknotePlusOutlineLogo = React.forwardRef<SVGSVGElement, CashBanknotePlusOutlineLogoProps>(
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
  <path d="M12.25 18h-7.25a2 2 0 0 1 -2 -2v-8a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v4.5" />
  <path d="M18 12h.01" />
  <path d="M6 12h.01" />
  <path d="M16 19h6" />
  <path d="M19 16v6" />
    </svg>
  )
);

CashBanknotePlusOutlineLogo.displayName = "CashBanknotePlusOutlineLogo";

export const CashBanknotePlusOutlineLogoMetadata = {
  id: "cash-banknote-plus-outline",
  baseId: "cash-banknote-plus-outline",
  variant: "default",
  name: "Cash Banknote Plus Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CashBanknotePlusOutlineLogo;
