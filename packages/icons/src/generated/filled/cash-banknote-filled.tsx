/**
 * Auto-generated logo component: Cash Banknote Filled (default)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CashBanknoteFilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CashBanknoteFilledLogo = React.forwardRef<SVGSVGElement, CashBanknoteFilledLogoProps>(
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
      <path d="M19 5a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-14a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3zm-7 4a3 3 0 0 0 -2.996 2.85l-.004 .15a3 3 0 1 0 3 -3m6.01 2h-.01a1 1 0 0 0 0 2h.01a1 1 0 0 0 0 -2m-12 0h-.01a1 1 0 1 0 .01 2a1 1 0 0 0 0 -2" />
    </svg>
  )
);

CashBanknoteFilledLogo.displayName = "CashBanknoteFilledLogo";

export const CashBanknoteFilledLogoMetadata = {
  id: "cash-banknote-filled",
  baseId: "cash-banknote-filled",
  variant: "default",
  name: "Cash Banknote Filled",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CashBanknoteFilledLogo;
