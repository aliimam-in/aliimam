/**
 * Auto-generated logo component: Rv Truck Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface RvTruckOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const RvTruckOutlineLogo = React.forwardRef<SVGSVGElement, RvTruckOutlineLogoProps>(
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
      <path d="M5 17a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  <path d="M15 17a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  <path d="M9 17h6" />
  <path d="M19 17h1a1 1 0 0 0 1 -1v-4.528a2 2 0 0 0 -.211 -.894l-.96 -1.92a3 3 0 0 0 -2.683 -1.658h-11.146a3 3 0 0 0 -3 3v6a1 1 0 0 0 1 1h1" />
  <path d="M3 12h18" />
  <path d="M15 12v-5" />
  <path d="M6 5.5a1.5 1.5 0 0 1 1.5 -1.5h7a1.5 1.5 0 0 1 1.5 1.5a1.5 1.5 0 0 1 -1.5 1.5h-7a1.5 1.5 0 0 1 -1.5 -1.5" />
    </svg>
  )
);

RvTruckOutlineLogo.displayName = "RvTruckOutlineLogo";

export const RvTruckOutlineLogoMetadata = {
  id: "rv-truck-outline",
  baseId: "rv-truck-outline",
  variant: "default",
  name: "Rv Truck Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default RvTruckOutlineLogo;
