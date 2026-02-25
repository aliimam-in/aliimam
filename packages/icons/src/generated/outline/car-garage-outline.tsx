/**
 * Auto-generated logo component: Car Garage Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CarGarageOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CarGarageOutlineLogo = React.forwardRef<SVGSVGElement, CarGarageOutlineLogoProps>(
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
      <path d="M5 20a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
  <path d="M15 20a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
  <path d="M5 20h-2v-6l2 -5h9l4 5h1a2 2 0 0 1 2 2v4h-2m-4 0h-6m-6 -6h15m-6 0v-5" />
  <path d="M3 6l9 -4l9 4" />
    </svg>
  )
);

CarGarageOutlineLogo.displayName = "CarGarageOutlineLogo";

export const CarGarageOutlineLogoMetadata = {
  id: "car-garage-outline",
  baseId: "car-garage-outline",
  variant: "default",
  name: "Car Garage Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CarGarageOutlineLogo;
