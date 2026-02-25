/**
 * Auto-generated logo component: Receipt Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ReceiptOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ReceiptOffOutlineLogo = React.forwardRef<SVGSVGElement, ReceiptOffOutlineLogoProps>(
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
      <path d="M5 21v-16m2 -2h10a2 2 0 0 1 2 2v10m0 4.01v1.99l-3 -2l-2 2l-2 -2l-2 2l-2 -2l-3 2" />
  <path d="M11 7l4 0" />
  <path d="M9 11l2 0" />
  <path d="M13 15l2 0" />
  <path d="M15 11l0 .01" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

ReceiptOffOutlineLogo.displayName = "ReceiptOffOutlineLogo";

export const ReceiptOffOutlineLogoMetadata = {
  id: "receipt-off-outline",
  baseId: "receipt-off-outline",
  variant: "default",
  name: "Receipt Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ReceiptOffOutlineLogo;
