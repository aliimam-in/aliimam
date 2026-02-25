/**
 * Auto-generated logo component: Car Crash Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CarCrashOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CarCrashOutlineLogo = React.forwardRef<SVGSVGElement, CarCrashOutlineLogoProps>(
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
      <path d="M8 17a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  <path d="M7 6l4 5h1a2 2 0 0 1 2 2v4h-2m-4 0h-5m0 -6h8m-6 0v-5m2 0h-4" />
  <path d="M14 8v-2" />
  <path d="M19 12h2" />
  <path d="M17.5 15.5l1.5 1.5" />
  <path d="M17.5 8.5l1.5 -1.5" />
    </svg>
  )
);

CarCrashOutlineLogo.displayName = "CarCrashOutlineLogo";

export const CarCrashOutlineLogoMetadata = {
  id: "car-crash-outline",
  baseId: "car-crash-outline",
  variant: "default",
  name: "Car Crash Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CarCrashOutlineLogo;
