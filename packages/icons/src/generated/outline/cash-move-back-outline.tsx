/**
 * Auto-generated logo component: Cash Move Back Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CashMoveBackOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CashMoveBackOutlineLogo = React.forwardRef<SVGSVGElement, CashMoveBackOutlineLogoProps>(
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
  <path d="M12 19h-4a1 1 0 0 1 -1 -1v-8a1 1 0 0 1 1 -1h12a1 1 0 0 1 1 1v2.5" />
  <path d="M15.914 13.417a2 2 0 1 0 -2.447 2.511" />
  <path d="M16 19h6" />
  <path d="M19 16l-3 3l3 3" />
    </svg>
  )
);

CashMoveBackOutlineLogo.displayName = "CashMoveBackOutlineLogo";

export const CashMoveBackOutlineLogoMetadata = {
  id: "cash-move-back-outline",
  baseId: "cash-move-back-outline",
  variant: "default",
  name: "Cash Move Back Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CashMoveBackOutlineLogo;
