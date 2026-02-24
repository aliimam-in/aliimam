/**
 * Auto-generated logo component: Circle Parking (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CircleParkingLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CircleParkingLogo = React.forwardRef<SVGSVGElement, CircleParkingLogoProps>(
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
      <circle cx="12" cy="12" r="10" />
  <path d="M9 17V7h4a3 3 0 0 1 0 6H9" />
    </svg>
  )
);

CircleParkingLogo.displayName = "CircleParkingLogo";

export const CircleParkingLogoMetadata = {
  id: "circle-parking",
  baseId: "circle-parking",
  variant: "default",
  name: "Circle Parking",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CircleParkingLogo;
