/**
 * Auto-generated logo component: Cash Banknote Heart Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CashBanknoteHeartOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CashBanknoteHeartOutlineLogo = React.forwardRef<SVGSVGElement, CashBanknoteHeartOutlineLogoProps>(
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
      <path d="M14.872 11.13a3.001 3.001 0 1 0 -4.29 3.514" />
  <path d="M10 18h-5a2 2 0 0 1 -2 -2v-8a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v3" />
  <path d="M6 12h.01" />
  <path d="M18 22l3.35 -3.284a2.143 2.143 0 0 0 .005 -3.071a2.24 2.24 0 0 0 -3.129 -.006l-.224 .22l-.223 -.22a2.24 2.24 0 0 0 -3.128 -.006a2.143 2.143 0 0 0 -.006 3.071l3.355 3.296" />
    </svg>
  )
);

CashBanknoteHeartOutlineLogo.displayName = "CashBanknoteHeartOutlineLogo";

export const CashBanknoteHeartOutlineLogoMetadata = {
  id: "cash-banknote-heart-outline",
  baseId: "cash-banknote-heart-outline",
  variant: "default",
  name: "Cash Banknote Heart Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CashBanknoteHeartOutlineLogo;
