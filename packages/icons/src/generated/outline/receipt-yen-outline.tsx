/**
 * Auto-generated logo component: Receipt Yen Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ReceiptYenOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ReceiptYenOutlineLogo = React.forwardRef<SVGSVGElement, ReceiptYenOutlineLogoProps>(
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
  <path d="M9 11h6" />
  <path d="M9 14h6" />
  <path d="M9 7l3 4.5" />
  <path d="M15 7l-3 4.5v4.5" />
    </svg>
  )
);

ReceiptYenOutlineLogo.displayName = "ReceiptYenOutlineLogo";

export const ReceiptYenOutlineLogoMetadata = {
  id: "receipt-yen-outline",
  baseId: "receipt-yen-outline",
  variant: "default",
  name: "Receipt Yen Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ReceiptYenOutlineLogo;
