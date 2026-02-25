/**
 * Auto-generated logo component: Receipt Pound Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ReceiptPoundOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ReceiptPoundOutlineLogo = React.forwardRef<SVGSVGElement, ReceiptPoundOutlineLogoProps>(
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
  <path d="M15 9a2 2 0 1 0 -4 0v4a2 2 0 0 1 -2 2h6" />
  <path d="M9 12h4" />
    </svg>
  )
);

ReceiptPoundOutlineLogo.displayName = "ReceiptPoundOutlineLogo";

export const ReceiptPoundOutlineLogoMetadata = {
  id: "receipt-pound-outline",
  baseId: "receipt-pound-outline",
  variant: "default",
  name: "Receipt Pound Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ReceiptPoundOutlineLogo;
