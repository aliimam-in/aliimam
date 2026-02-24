/**
 * Auto-generated logo component: Parking Meter (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ParkingMeterLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ParkingMeterLogo = React.forwardRef<SVGSVGElement, ParkingMeterLogoProps>(
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
      <path d="M11 15h2" />
  <path d="M12 12v3" />
  <path d="M12 19v3" />
  <path d="M15.282 19a1 1 0 0 0 .948-.68l2.37-6.988a7 7 0 1 0-13.2 0l2.37 6.988a1 1 0 0 0 .948.68z" />
  <path d="M9 9a3 3 0 1 1 6 0" />
    </svg>
  )
);

ParkingMeterLogo.displayName = "ParkingMeterLogo";

export const ParkingMeterLogoMetadata = {
  id: "parking-meter",
  baseId: "parking-meter",
  variant: "default",
  name: "Parking Meter",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ParkingMeterLogo;
