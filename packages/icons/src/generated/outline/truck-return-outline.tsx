/**
 * Auto-generated logo component: Truck Return Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface TruckReturnOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const TruckReturnOutlineLogo = React.forwardRef<SVGSVGElement, TruckReturnOutlineLogoProps>(
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
  <path d="M5 17h-2v-11a1 1 0 0 1 1 -1h9v6h-5l2 2m0 -4l-2 2" />
  <path d="M9 17l6 0" />
  <path d="M13 6h5l3 5v6h-2" />
    </svg>
  )
);

TruckReturnOutlineLogo.displayName = "TruckReturnOutlineLogo";

export const TruckReturnOutlineLogoMetadata = {
  id: "truck-return-outline",
  baseId: "truck-return-outline",
  variant: "default",
  name: "Truck Return Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default TruckReturnOutlineLogo;
