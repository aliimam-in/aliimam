/**
 * Auto-generated logo component: Bus Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BusOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BusOffOutlineLogo = React.forwardRef<SVGSVGElement, BusOffOutlineLogoProps>(
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
      <path d="M4 17a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  <path d="M16.18 16.172a2 2 0 0 0 2.652 2.648" />
  <path d="M4 17h-2v-11a1 1 0 0 1 1 -1h2m4 0h8c2.761 0 5 3.134 5 7v5h-1m-5 0h-8" />
  <path d="M16 5l1.5 7h4.5" />
  <path d="M2 10h8m4 0h3" />
  <path d="M7 7v3" />
  <path d="M12 5v3" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

BusOffOutlineLogo.displayName = "BusOffOutlineLogo";

export const BusOffOutlineLogoMetadata = {
  id: "bus-off-outline",
  baseId: "bus-off-outline",
  variant: "default",
  name: "Bus Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BusOffOutlineLogo;
