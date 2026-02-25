/**
 * Auto-generated logo component: Bus Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BusOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BusOutlineLogo = React.forwardRef<SVGSVGElement, BusOutlineLogoProps>(
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
  <path d="M16 17a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  <path d="M4 17h-2v-11a1 1 0 0 1 1 -1h14a5 7 0 0 1 5 7v5h-2m-4 0h-8" />
  <path d="M16 5l1.5 7l4.5 0" />
  <path d="M2 10l15 0" />
  <path d="M7 5l0 5" />
  <path d="M12 5l0 5" />
    </svg>
  )
);

BusOutlineLogo.displayName = "BusOutlineLogo";

export const BusOutlineLogoMetadata = {
  id: "bus-outline",
  baseId: "bus-outline",
  variant: "default",
  name: "Bus Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BusOutlineLogo;
