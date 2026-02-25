/**
 * Auto-generated logo component: Transaction Yen Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface TransactionYenOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const TransactionYenOutlineLogo = React.forwardRef<SVGSVGElement, TransactionYenOutlineLogoProps>(
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
      <path d="M15 16h6" />
  <path d="M15 12l3 4.5" />
  <path d="M21 12l-3 4.5v4.5" />
  <path d="M15 19h6" />
  <path d="M3 5a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  <path d="M15 5a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  <path d="M7 5h8" />
  <path d="M7 5v8a3 3 0 0 0 3 3h1" />
    </svg>
  )
);

TransactionYenOutlineLogo.displayName = "TransactionYenOutlineLogo";

export const TransactionYenOutlineLogoMetadata = {
  id: "transaction-yen-outline",
  baseId: "transaction-yen-outline",
  variant: "default",
  name: "Transaction Yen Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default TransactionYenOutlineLogo;
