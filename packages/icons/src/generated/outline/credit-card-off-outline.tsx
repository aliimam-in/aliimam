/**
 * Auto-generated logo component: Credit Card Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CreditCardOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CreditCardOffOutlineLogo = React.forwardRef<SVGSVGElement, CreditCardOffOutlineLogoProps>(
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
      <path d="M3 3l18 18" />
  <path d="M9 5h9a3 3 0 0 1 3 3v8a3 3 0 0 1 -.128 .87" />
  <path d="M18.87 18.872a3 3 0 0 1 -.87 .128h-12a3 3 0 0 1 -3 -3v-8c0 -1.352 .894 -2.495 2.124 -2.87" />
  <path d="M3 11l8 0" />
  <path d="M15 11l6 0" />
  <path d="M7 15l.01 0" />
  <path d="M11 15l2 0" />
    </svg>
  )
);

CreditCardOffOutlineLogo.displayName = "CreditCardOffOutlineLogo";

export const CreditCardOffOutlineLogoMetadata = {
  id: "credit-card-off-outline",
  baseId: "credit-card-off-outline",
  variant: "default",
  name: "Credit Card Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CreditCardOffOutlineLogo;
