/**
 * Auto-generated logo component: Credit Card Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CreditCardOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CreditCardOutlineLogo = React.forwardRef<SVGSVGElement, CreditCardOutlineLogoProps>(
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
      <path d="M3 8a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3l0 -8" />
  <path d="M3 10l18 0" />
  <path d="M7 15l.01 0" />
  <path d="M11 15l2 0" />
    </svg>
  )
);

CreditCardOutlineLogo.displayName = "CreditCardOutlineLogo";

export const CreditCardOutlineLogoMetadata = {
  id: "credit-card-outline",
  baseId: "credit-card-outline",
  variant: "default",
  name: "Credit Card Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CreditCardOutlineLogo;
