/**
 * Auto-generated logo component: Square Parking Off (default)
 * Category: square
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SquareParkingOffLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SquareParkingOffLogo = React.forwardRef<SVGSVGElement, SquareParkingOffLogoProps>(
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
      <path d="M3.6 3.6A2 2 0 0 1 5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-.59 1.41" />
  <path d="M3 8.7V19a2 2 0 0 0 2 2h10.3" />
  <path d="m2 2 20 20" />
  <path d="M13 13a3 3 0 1 0 0-6H9v2" />
  <path d="M9 17v-2.3" />
    </svg>
  )
);

SquareParkingOffLogo.displayName = "SquareParkingOffLogo";

export const SquareParkingOffLogoMetadata = {
  id: "square-parking-off",
  baseId: "square-parking-off",
  variant: "default",
  name: "Square Parking Off",
  category: "square",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SquareParkingOffLogo;
