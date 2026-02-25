/**
 * Auto-generated logo component: Credit Card Filled (default)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CreditCardFilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CreditCardFilledLogo = React.forwardRef<SVGSVGElement, CreditCardFilledLogoProps>(
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
      <path d="M22 10v6a4 4 0 0 1 -4 4h-12a4 4 0 0 1 -4 -4v-6h20zm-14.99 4h-.01a1 1 0 1 0 .01 2a1 1 0 0 0 0 -2m5.99 0h-2a1 1 0 0 0 0 2h2a1 1 0 0 0 0 -2zm5 -10a4 4 0 0 1 4 4h-20a4 4 0 0 1 4 -4h12z" />
    </svg>
  )
);

CreditCardFilledLogo.displayName = "CreditCardFilledLogo";

export const CreditCardFilledLogoMetadata = {
  id: "credit-card-filled",
  baseId: "credit-card-filled",
  variant: "default",
  name: "Credit Card Filled",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CreditCardFilledLogo;
