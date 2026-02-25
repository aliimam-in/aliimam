/**
 * Auto-generated logo component: Car Fan Auto Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CarFanAutoOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CarFanAutoOutlineLogo = React.forwardRef<SVGSVGElement, CarFanAutoOutlineLogoProps>(
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
      <path d="M12 12v-9l4.912 1.914a1.7 1.7 0 0 1 .428 2.925l-5.34 4.161" />
  <path d="M14.044 14.624l-2.044 -2.624h4" />
  <path d="M12 12h-9l1.914 -4.912a1.7 1.7 0 0 1 2.925 -.428l4.161 5.34" />
  <path d="M12 12v9l-4.912 -1.914a1.7 1.7 0 0 1 -.428 -2.925l5.34 -4.161" />
  <path d="M17 21v-4a2 2 0 1 1 4 0v4" />
  <path d="M17 19h4" />
    </svg>
  )
);

CarFanAutoOutlineLogo.displayName = "CarFanAutoOutlineLogo";

export const CarFanAutoOutlineLogoMetadata = {
  id: "car-fan-auto-outline",
  baseId: "car-fan-auto-outline",
  variant: "default",
  name: "Car Fan Auto Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CarFanAutoOutlineLogo;
