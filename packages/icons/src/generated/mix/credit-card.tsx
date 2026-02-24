/**
 * Auto-generated logo component: Credit Card (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MixCreditCardLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MixCreditCardLogo = React.forwardRef<SVGSVGElement, MixCreditCardLogoProps>(
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
      <rect width="20" height="14" x="2" y="5" rx="2" />
  <line x1="2" x2="22" y1="10" y2="10" />
    </svg>
  )
);

MixCreditCardLogo.displayName = "MixCreditCardLogo";

export const MixCreditCardLogoMetadata = {
  id: "credit-card",
  baseId: "credit-card",
  variant: "default",
  name: "Credit Card",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MixCreditCardLogo;
