/**
 * Auto-generated logo component: Car Fan 3 Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CarFan3OutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CarFan3OutlineLogo = React.forwardRef<SVGSVGElement, CarFan3OutlineLogoProps>(
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
  <path d="M18 15.5a.5 .5 0 0 1 .5 -.5h1a1.5 1.5 0 0 1 0 3h-.5h.5a1.5 1.5 0 0 1 0 3h-1a.5 .5 0 0 1 -.5 -.5" />
    </svg>
  )
);

CarFan3OutlineLogo.displayName = "CarFan3OutlineLogo";

export const CarFan3OutlineLogoMetadata = {
  id: "car-fan-3-outline",
  baseId: "car-fan-3-outline",
  variant: "default",
  name: "Car Fan 3 Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CarFan3OutlineLogo;
