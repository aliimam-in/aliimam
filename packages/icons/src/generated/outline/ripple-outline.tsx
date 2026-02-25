/**
 * Auto-generated logo component: Ripple Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface RippleOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const RippleOutlineLogo = React.forwardRef<SVGSVGElement, RippleOutlineLogoProps>(
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
      <path d="M3 7c3 -2 6 -2 9 0s6 2 9 0" />
  <path d="M3 17c3 -2 6 -2 9 0s6 2 9 0" />
  <path d="M3 12c3 -2 6 -2 9 0s6 2 9 0" />
    </svg>
  )
);

RippleOutlineLogo.displayName = "RippleOutlineLogo";

export const RippleOutlineLogoMetadata = {
  id: "ripple-outline",
  baseId: "ripple-outline",
  variant: "default",
  name: "Ripple Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default RippleOutlineLogo;
