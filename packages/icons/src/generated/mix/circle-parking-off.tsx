/**
 * Auto-generated logo component: Circle Parking Off (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CircleParkingOffLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CircleParkingOffLogo = React.forwardRef<SVGSVGElement, CircleParkingOffLogoProps>(
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
      <path d="M12.656 7H13a3 3 0 0 1 2.984 3.307" />
  <path d="M13 13H9" />
  <path d="M19.071 19.071A1 1 0 0 1 4.93 4.93" />
  <path d="m2 2 20 20" />
  <path d="M8.357 2.687a10 10 0 0 1 12.956 12.956" />
  <path d="M9 17V9" />
    </svg>
  )
);

CircleParkingOffLogo.displayName = "CircleParkingOffLogo";

export const CircleParkingOffLogoMetadata = {
  id: "circle-parking-off",
  baseId: "circle-parking-off",
  variant: "default",
  name: "Circle Parking Off",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CircleParkingOffLogo;
