/**
 * Auto-generated logo component: Parking Circle (filled)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ParkingCircleFilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ParkingCircleFilledLogo = React.forwardRef<SVGSVGElement, ParkingCircleFilledLogoProps>(
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
      <path d="M12 2c5.523 0 10 4.477 10 10a10 10 0 0 1 -20 0l.004 -.28c.148 -5.393 4.566 -9.72 9.996 -9.72m1.334 5h-3.334a1 1 0 0 0 -1 1v8a1 1 0 0 0 1 1l.117 -.007a1 1 0 0 0 .883 -.993v-3h2.334c1.516 0 2.666 -1.38 2.666 -3s-1.15 -3 -2.666 -3m0 2c.323 0 .666 .411 .666 1s-.343 1 -.666 1h-2.334v-2z" />
    </svg>
  )
);

ParkingCircleFilledLogo.displayName = "ParkingCircleFilledLogo";

export const ParkingCircleFilledLogoMetadata = {
  id: "parking-circle_filled",
  baseId: "parking-circle",
  variant: "filled",
  name: "Parking Circle",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ParkingCircleFilledLogo;
