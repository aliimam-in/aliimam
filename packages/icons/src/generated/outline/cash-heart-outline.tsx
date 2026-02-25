/**
 * Auto-generated logo component: Cash Heart Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CashHeartOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CashHeartOutlineLogo = React.forwardRef<SVGSVGElement, CashHeartOutlineLogoProps>(
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
  <path d="M10.25 19h-2.25a1 1 0 0 1 -1 -1v-8a1 1 0 0 1 1 -1h12a1 1 0 0 1 1 1v1.25" />
  <path d="M18 22l3.35 -3.284a2.143 2.143 0 0 0 .005 -3.071a2.24 2.24 0 0 0 -3.129 -.006l-.224 .22l-.223 -.22a2.24 2.24 0 0 0 -3.128 -.006a2.143 2.143 0 0 0 -.006 3.071l3.355 3.296" />
    </svg>
  )
);

CashHeartOutlineLogo.displayName = "CashHeartOutlineLogo";

export const CashHeartOutlineLogoMetadata = {
  id: "cash-heart-outline",
  baseId: "cash-heart-outline",
  variant: "default",
  name: "Cash Heart Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CashHeartOutlineLogo;
