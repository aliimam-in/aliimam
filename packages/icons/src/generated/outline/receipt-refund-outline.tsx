/**
 * Auto-generated logo component: Receipt Refund Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ReceiptRefundOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ReceiptRefundOutlineLogo = React.forwardRef<SVGSVGElement, ReceiptRefundOutlineLogoProps>(
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
  <path d="M15 14v-2a2 2 0 0 0 -2 -2h-4l2 -2m0 4l-2 -2" />
    </svg>
  )
);

ReceiptRefundOutlineLogo.displayName = "ReceiptRefundOutlineLogo";

export const ReceiptRefundOutlineLogoMetadata = {
  id: "receipt-refund-outline",
  baseId: "receipt-refund-outline",
  variant: "default",
  name: "Receipt Refund Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ReceiptRefundOutlineLogo;
