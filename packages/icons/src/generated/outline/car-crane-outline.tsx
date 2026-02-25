/**
 * Auto-generated logo component: Car Crane Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CarCraneOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CarCraneOutlineLogo = React.forwardRef<SVGSVGElement, CarCraneOutlineLogoProps>(
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
      <path d="M3 17a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  <path d="M15 17a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  <path d="M7 18h8m4 0h2v-6a5 5 0 0 0 -5 -5h-1l1.5 5h4.5" />
  <path d="M12 18v-11h3" />
  <path d="M3 17v-5h9" />
  <path d="M4 12v-6l18 -3v2" />
  <path d="M8 12v-4l-4 -2" />
    </svg>
  )
);

CarCraneOutlineLogo.displayName = "CarCraneOutlineLogo";

export const CarCraneOutlineLogoMetadata = {
  id: "car-crane-outline",
  baseId: "car-crane-outline",
  variant: "default",
  name: "Car Crane Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CarCraneOutlineLogo;
