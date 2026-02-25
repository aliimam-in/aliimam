/**
 * Auto-generated logo component: Credit Card Pay Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CreditCardPayOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CreditCardPayOutlineLogo = React.forwardRef<SVGSVGElement, CreditCardPayOutlineLogoProps>(
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
      <path d="M12 19h-6a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v4.5" />
  <path d="M3 10h18" />
  <path d="M16 19h6" />
  <path d="M19 16l3 3l-3 3" />
  <path d="M7.005 15h.005" />
  <path d="M11 15h2" />
    </svg>
  )
);

CreditCardPayOutlineLogo.displayName = "CreditCardPayOutlineLogo";

export const CreditCardPayOutlineLogoMetadata = {
  id: "credit-card-pay-outline",
  baseId: "credit-card-pay-outline",
  variant: "default",
  name: "Credit Card Pay Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CreditCardPayOutlineLogo;
