/**
 * Auto-generated logo component: Truck Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface TruckOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const TruckOffOutlineLogo = React.forwardRef<SVGSVGElement, TruckOffOutlineLogoProps>(
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
  <path d="M15.585 15.586a2 2 0 0 0 2.826 2.831" />
  <path d="M5 17h-2v-11a1 1 0 0 1 1 -1h1m3.96 0h4.04v4m0 4v4m-4 0h6m6 0v-6h-6m-2 -5h5l3 5" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

TruckOffOutlineLogo.displayName = "TruckOffOutlineLogo";

export const TruckOffOutlineLogoMetadata = {
  id: "truck-off-outline",
  baseId: "truck-off-outline",
  variant: "default",
  name: "Truck Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default TruckOffOutlineLogo;
