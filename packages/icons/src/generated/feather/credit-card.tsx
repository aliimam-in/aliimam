/**
 * Auto-generated logo component: Credit Card (default)
 * Category: feather
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CreditCardLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CreditCardLogo = React.forwardRef<SVGSVGElement, CreditCardLogoProps>(
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
      <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/>
    </svg>
  )
);

CreditCardLogo.displayName = "CreditCardLogo";

export const CreditCardLogoMetadata = {
  id: "credit-card",
  baseId: "credit-card",
  variant: "default",
  name: "Credit Card",
  category: "feather",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CreditCardLogo;
