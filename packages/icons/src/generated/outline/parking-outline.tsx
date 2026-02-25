/**
 * Auto-generated logo component: Parking Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ParkingOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ParkingOutlineLogo = React.forwardRef<SVGSVGElement, ParkingOutlineLogoProps>(
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
      <path d="M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14" />
  <path d="M10 16v-8h2.667c.736 0 1.333 .895 1.333 2s-.597 2 -1.333 2h-2.667" />
    </svg>
  )
);

ParkingOutlineLogo.displayName = "ParkingOutlineLogo";

export const ParkingOutlineLogoMetadata = {
  id: "parking-outline",
  baseId: "parking-outline",
  variant: "default",
  name: "Parking Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ParkingOutlineLogo;
