/**
 * Auto-generated logo component: Cash Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CashOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CashOffOutlineLogo = React.forwardRef<SVGSVGElement, CashOffOutlineLogoProps>(
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
      <path d="M13 9h6a2 2 0 0 1 2 2v6m-2 2h-10a2 2 0 0 1 -2 -2v-6a2 2 0 0 1 2 -2" />
  <path d="M12.582 12.59a2 2 0 0 0 2.83 2.826" />
  <path d="M17 9v-2a2 2 0 0 0 -2 -2h-6m-4 0a2 2 0 0 0 -2 2v6a2 2 0 0 0 2 2h2" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

CashOffOutlineLogo.displayName = "CashOffOutlineLogo";

export const CashOffOutlineLogoMetadata = {
  id: "cash-off-outline",
  baseId: "cash-off-outline",
  variant: "default",
  name: "Cash Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CashOffOutlineLogo;
