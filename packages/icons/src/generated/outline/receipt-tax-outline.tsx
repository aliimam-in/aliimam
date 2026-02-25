/**
 * Auto-generated logo component: Receipt Tax Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ReceiptTaxOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ReceiptTaxOutlineLogo = React.forwardRef<SVGSVGElement, ReceiptTaxOutlineLogoProps>(
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
      <path d="M9 14l6 -6" />
  <path d="M9 8.5a.5 .5 0 1 0 1 0a.5 .5 0 1 0 -1 0" fill="currentColor" />
  <path d="M14 13.5a.5 .5 0 1 0 1 0a.5 .5 0 1 0 -1 0" fill="currentColor" />
  <path d="M5 21v-16a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16l-3 -2l-2 2l-2 -2l-2 2l-2 -2l-3 2" />
    </svg>
  )
);

ReceiptTaxOutlineLogo.displayName = "ReceiptTaxOutlineLogo";

export const ReceiptTaxOutlineLogoMetadata = {
  id: "receipt-tax-outline",
  baseId: "receipt-tax-outline",
  variant: "default",
  name: "Receipt Tax Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ReceiptTaxOutlineLogo;
