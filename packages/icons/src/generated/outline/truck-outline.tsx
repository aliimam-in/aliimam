/**
 * Auto-generated logo component: Truck Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface TruckOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const TruckOutlineLogo = React.forwardRef<SVGSVGElement, TruckOutlineLogoProps>(
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
  <path d="M5 17h-2v-11a1 1 0 0 1 1 -1h9v12m-4 0h6m4 0h2v-6h-8m0 -5h5l3 5" />
    </svg>
  )
);

TruckOutlineLogo.displayName = "TruckOutlineLogo";

export const TruckOutlineLogoMetadata = {
  id: "truck-outline",
  baseId: "truck-outline",
  variant: "default",
  name: "Truck Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default TruckOutlineLogo;
