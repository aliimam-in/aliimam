/**
 * Auto-generated logo component: Transaction Pound Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface TransactionPoundOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const TransactionPoundOutlineLogo = React.forwardRef<SVGSVGElement, TransactionPoundOutlineLogoProps>(
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
      <path d="M21 14a2 2 0 1 0 -4 0v4a2 2 0 0 1 -2 2h6" />
  <path d="M15 17h4" />
  <path d="M3 5a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  <path d="M15 5a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  <path d="M7 5h8" />
  <path d="M7 5v8a3 3 0 0 0 3 3h1" />
    </svg>
  )
);

TransactionPoundOutlineLogo.displayName = "TransactionPoundOutlineLogo";

export const TransactionPoundOutlineLogoMetadata = {
  id: "transaction-pound-outline",
  baseId: "transaction-pound-outline",
  variant: "default",
  name: "Transaction Pound Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default TransactionPoundOutlineLogo;
