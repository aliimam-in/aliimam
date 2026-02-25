/**
 * Auto-generated logo component: Credit Card Refund Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CreditCardRefundOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CreditCardRefundOutlineLogo = React.forwardRef<SVGSVGElement, CreditCardRefundOutlineLogoProps>(
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
  <path d="M7 15h.01" />
  <path d="M11 15h2" />
  <path d="M16 19h6" />
  <path d="M19 16l-3 3l3 3" />
    </svg>
  )
);

CreditCardRefundOutlineLogo.displayName = "CreditCardRefundOutlineLogo";

export const CreditCardRefundOutlineLogoMetadata = {
  id: "credit-card-refund-outline",
  baseId: "credit-card-refund-outline",
  variant: "default",
  name: "Credit Card Refund Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CreditCardRefundOutlineLogo;
