/**
 * Auto-generated logo component: Shield Check Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ShieldCheckOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ShieldCheckOutlineLogo = React.forwardRef<SVGSVGElement, ShieldCheckOutlineLogoProps>(
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
      <path d="M11.46 20.846a12 12 0 0 1 -7.96 -14.846a12 12 0 0 0 8.5 -3a12 12 0 0 0 8.5 3a12 12 0 0 1 -.09 7.06" />
  <path d="M15 19l2 2l4 -4" />
    </svg>
  )
);

ShieldCheckOutlineLogo.displayName = "ShieldCheckOutlineLogo";

export const ShieldCheckOutlineLogoMetadata = {
  id: "shield-check-outline",
  baseId: "shield-check-outline",
  variant: "default",
  name: "Shield Check Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ShieldCheckOutlineLogo;
