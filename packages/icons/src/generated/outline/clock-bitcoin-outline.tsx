/**
 * Auto-generated logo component: Clock Bitcoin Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ClockBitcoinOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ClockBitcoinOutlineLogo = React.forwardRef<SVGSVGElement, ClockBitcoinOutlineLogoProps>(
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
  <path d="M20.866 10.45a9 9 0 1 0 -7.815 10.488" />
  <path d="M12 7v5l1.5 1.5" />
    </svg>
  )
);

ClockBitcoinOutlineLogo.displayName = "ClockBitcoinOutlineLogo";

export const ClockBitcoinOutlineLogoMetadata = {
  id: "clock-bitcoin-outline",
  baseId: "clock-bitcoin-outline",
  variant: "default",
  name: "Clock Bitcoin Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ClockBitcoinOutlineLogo;
