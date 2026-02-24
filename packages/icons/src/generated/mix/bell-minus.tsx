/**
 * Auto-generated logo component: Bell Minus (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BellMinusLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BellMinusLogo = React.forwardRef<SVGSVGElement, BellMinusLogoProps>(
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
      <path d="M10.268 21a2 2 0 0 0 3.464 0" />
  <path d="M15 8h6" />
  <path d="M16.243 3.757A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673A9.4 9.4 0 0 1 18.667 12" />
    </svg>
  )
);

BellMinusLogo.displayName = "BellMinusLogo";

export const BellMinusLogoMetadata = {
  id: "bell-minus",
  baseId: "bell-minus",
  variant: "default",
  name: "Bell Minus",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BellMinusLogo;
