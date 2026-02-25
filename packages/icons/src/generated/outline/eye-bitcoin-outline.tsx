/**
 * Auto-generated logo component: Eye Bitcoin Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface EyeBitcoinOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const EyeBitcoinOutlineLogo = React.forwardRef<SVGSVGElement, EyeBitcoinOutlineLogoProps>(
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
      <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
  <path d="M13.193 17.924q -.585 .075 -1.193 .076q -5.4 0 -9 -6q 3.6 -6 9 -6q 4.508 0 7.761 4.181" />
  <path d="M17 21v-6m2 0v-1.5m0 9v-1.5m-2 -3h3m-1 0h.5a1.5 1.5 0 0 1 0 3h-3.5m3 -3h.5a1.5 1.5 0 0 0 0 -3h-3.5" />
    </svg>
  )
);

EyeBitcoinOutlineLogo.displayName = "EyeBitcoinOutlineLogo";

export const EyeBitcoinOutlineLogoMetadata = {
  id: "eye-bitcoin-outline",
  baseId: "eye-bitcoin-outline",
  variant: "default",
  name: "Eye Bitcoin Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default EyeBitcoinOutlineLogo;
