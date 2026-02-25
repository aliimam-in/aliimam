/**
 * Auto-generated logo component: Adjustments Check Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface AdjustmentsCheckOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const AdjustmentsCheckOutlineLogo = React.forwardRef<SVGSVGElement, AdjustmentsCheckOutlineLogoProps>(
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
      <path d="M4 10a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
  <path d="M6 4v4" />
  <path d="M6 12v8" />
  <path d="M13.823 15.176a2 2 0 1 0 -2.638 2.651" />
  <path d="M12 4v10" />
  <path d="M16 7a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
  <path d="M18 4v1" />
  <path d="M18 9v5" />
  <path d="M15 19l2 2l4 -4" />
    </svg>
  )
);

AdjustmentsCheckOutlineLogo.displayName = "AdjustmentsCheckOutlineLogo";

export const AdjustmentsCheckOutlineLogoMetadata = {
  id: "adjustments-check-outline",
  baseId: "adjustments-check-outline",
  variant: "default",
  name: "Adjustments Check Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default AdjustmentsCheckOutlineLogo;
