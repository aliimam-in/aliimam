/**
 * Auto-generated logo component: Receipt Turkish Lira (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ReceiptTurkishLiraLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ReceiptTurkishLiraLogo = React.forwardRef<SVGSVGElement, ReceiptTurkishLiraLogoProps>(
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
      <path d="M10 7v10a5 5 0 0 0 5-5" />
  <path d="m14 8-6 3" />
  <path d="M4 3a1 1 0 0 1 1-1 1.3 1.3 0 0 1 .7.2l.933.6a1.3 1.3 0 0 0 1.4 0l.934-.6a1.3 1.3 0 0 1 1.4 0l.933.6a1.3 1.3 0 0 0 1.4 0l.933-.6a1.3 1.3 0 0 1 1.4 0l.934.6a1.3 1.3 0 0 0 1.4 0l.933-.6A1.3 1.3 0 0 1 19 2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1 1.3 1.3 0 0 1-.7-.2l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.934.6a1.3 1.3 0 0 1-1.4 0l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-1.4 0l-.934-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-.7.2 1 1 0 0 1-1-1z" />
    </svg>
  )
);

ReceiptTurkishLiraLogo.displayName = "ReceiptTurkishLiraLogo";

export const ReceiptTurkishLiraLogoMetadata = {
  id: "receipt-turkish-lira",
  baseId: "receipt-turkish-lira",
  variant: "default",
  name: "Receipt Turkish Lira",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ReceiptTurkishLiraLogo;
