/**
 * Auto-generated logo component: Bus Stop Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BusStopOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BusStopOutlineLogo = React.forwardRef<SVGSVGElement, BusStopOutlineLogoProps>(
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
      <path d="M3 4a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1l0 -4" />
  <path d="M16 17a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  <path d="M10 5h7c2.761 0 5 3.134 5 7v5h-2" />
  <path d="M16 17h-8" />
  <path d="M16 5l1.5 7h4.5" />
  <path d="M9.5 10h7.5" />
  <path d="M12 5v5" />
  <path d="M5 9v11" />
    </svg>
  )
);

BusStopOutlineLogo.displayName = "BusStopOutlineLogo";

export const BusStopOutlineLogoMetadata = {
  id: "bus-stop-outline",
  baseId: "bus-stop-outline",
  variant: "default",
  name: "Bus Stop Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BusStopOutlineLogo;
