/**
 * Auto-generated logo component: Receipt Rupee Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ReceiptRupeeOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ReceiptRupeeOutlineLogo = React.forwardRef<SVGSVGElement, ReceiptRupeeOutlineLogoProps>(
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
      <path d="M5 21v-16a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16l-3 -2l-2 2l-2 -2l-2 2l-2 -2l-3 2" />
  <path d="M15 7h-6h1a3 3 0 0 1 0 6h-1l3 3" />
  <path d="M9 10h6" />
    </svg>
  )
);

ReceiptRupeeOutlineLogo.displayName = "ReceiptRupeeOutlineLogo";

export const ReceiptRupeeOutlineLogoMetadata = {
  id: "receipt-rupee-outline",
  baseId: "receipt-rupee-outline",
  variant: "default",
  name: "Receipt Rupee Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ReceiptRupeeOutlineLogo;
