/**
 * Auto-generated logo component: Cash Minus Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CashMinusOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CashMinusOutlineLogo = React.forwardRef<SVGSVGElement, CashMinusOutlineLogoProps>(
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
      <path d="M7 15h-3a1 1 0 0 1 -1 -1v-8a1 1 0 0 1 1 -1h12a1 1 0 0 1 1 1v3" />
  <path d="M12 19h-4a1 1 0 0 1 -1 -1v-8a1 1 0 0 1 1 -1h12a1 1 0 0 1 1 1v5" />
  <path d="M12 14a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
  <path d="M16 19h6" />
    </svg>
  )
);

CashMinusOutlineLogo.displayName = "CashMinusOutlineLogo";

export const CashMinusOutlineLogoMetadata = {
  id: "cash-minus-outline",
  baseId: "cash-minus-outline",
  variant: "default",
  name: "Cash Minus Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CashMinusOutlineLogo;
