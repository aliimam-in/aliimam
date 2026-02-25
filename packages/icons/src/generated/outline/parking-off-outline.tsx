/**
 * Auto-generated logo component: Parking Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ParkingOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ParkingOffOutlineLogo = React.forwardRef<SVGSVGElement, ParkingOffOutlineLogoProps>(
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
      <path d="M8 4h10a2 2 0 0 1 2 2v10m-.582 3.41c-.362 .365 -.864 .59 -1.418 .59h-12a2 2 0 0 1 -2 -2v-12c0 -.554 .225 -1.056 .59 -1.418" />
  <path d="M9 16v-7m3 -1h1a2 2 0 0 1 1.817 2.836m-2.817 1.164h-3" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

ParkingOffOutlineLogo.displayName = "ParkingOffOutlineLogo";

export const ParkingOffOutlineLogoMetadata = {
  id: "parking-off-outline",
  baseId: "parking-off-outline",
  variant: "default",
  name: "Parking Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ParkingOffOutlineLogo;
