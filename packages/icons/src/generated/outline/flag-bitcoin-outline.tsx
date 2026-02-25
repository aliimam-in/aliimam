/**
 * Auto-generated logo component: Flag Bitcoin Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface FlagBitcoinOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const FlagBitcoinOutlineLogo = React.forwardRef<SVGSVGElement, FlagBitcoinOutlineLogoProps>(
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
      <path d="M17 21v-6m2 0v-1.5m0 9v-1.5m-2 -3h3m-1 0h.5a1.5 1.5 0 0 1 0 3h-3.5m3 -3h.5a1.5 1.5 0 0 0 0 -3h-3.5" />
  <path d="M13.222 14.882a5 5 0 0 1 -1.222 -.882a5 5 0 0 0 -7 0v-9a5 5 0 0 1 7 0a5 5 0 0 0 7 0v5" />
  <path d="M5 21v-7" />
    </svg>
  )
);

FlagBitcoinOutlineLogo.displayName = "FlagBitcoinOutlineLogo";

export const FlagBitcoinOutlineLogoMetadata = {
  id: "flag-bitcoin-outline",
  baseId: "flag-bitcoin-outline",
  variant: "default",
  name: "Flag Bitcoin Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default FlagBitcoinOutlineLogo;
