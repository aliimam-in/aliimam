/**
 * Auto-generated logo component: Receipt Pound Sterling (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ReceiptPoundSterlingLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ReceiptPoundSterlingLogo = React.forwardRef<SVGSVGElement, ReceiptPoundSterlingLogoProps>(
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
      <path d="M10 17V9.5a1 1 0 0 1 5 0" />
  <path d="M4 3a1 1 0 0 1 1-1 1.3 1.3 0 0 1 .7.2l.933.6a1.3 1.3 0 0 0 1.4 0l.934-.6a1.3 1.3 0 0 1 1.4 0l.933.6a1.3 1.3 0 0 0 1.4 0l.933-.6a1.3 1.3 0 0 1 1.4 0l.934.6a1.3 1.3 0 0 0 1.4 0l.933-.6A1.3 1.3 0 0 1 19 2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1 1.3 1.3 0 0 1-.7-.2l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.934.6a1.3 1.3 0 0 1-1.4 0l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-1.4 0l-.934-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-.7.2 1 1 0 0 1-1-1z" />
  <path d="M8 13h5" />
  <path d="M8 17h7" />
    </svg>
  )
);

ReceiptPoundSterlingLogo.displayName = "ReceiptPoundSterlingLogo";

export const ReceiptPoundSterlingLogoMetadata = {
  id: "receipt-pound-sterling",
  baseId: "receipt-pound-sterling",
  variant: "default",
  name: "Receipt Pound Sterling",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ReceiptPoundSterlingLogo;
