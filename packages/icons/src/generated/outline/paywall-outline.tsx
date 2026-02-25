/**
 * Auto-generated logo component: Paywall Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PaywallOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const PaywallOutlineLogo = React.forwardRef<SVGSVGElement, PaywallOutlineLogoProps>(
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
      <path d="M13 21h-6a2 2 0 0 1 -2 -2v-6a2 2 0 0 1 2 -2h10" />
  <path d="M11 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
  <path d="M8 11v-4a4 4 0 1 1 8 0v4" />
  <path d="M21 15h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3h-2.5" />
  <path d="M19 21v1" />
  <path d="M19 14v1" />
    </svg>
  )
);

PaywallOutlineLogo.displayName = "PaywallOutlineLogo";

export const PaywallOutlineLogoMetadata = {
  id: "paywall-outline",
  baseId: "paywall-outline",
  variant: "default",
  name: "Paywall Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default PaywallOutlineLogo;
