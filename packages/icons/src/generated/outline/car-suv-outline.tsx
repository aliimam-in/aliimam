/**
 * Auto-generated logo component: Car Suv Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CarSuvOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CarSuvOutlineLogo = React.forwardRef<SVGSVGElement, CarSuvOutlineLogoProps>(
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
      <path d="M5 17a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
  <path d="M16 17a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
  <path d="M5 9l2 -4h7.438a2 2 0 0 1 1.94 1.515l.622 2.485h3a2 2 0 0 1 2 2v3" />
  <path d="M10 9v-4" />
  <path d="M2 7v4" />
  <path d="M22.001 14.001a4.992 4.992 0 0 0 -4.001 -2.001a4.992 4.992 0 0 0 -4 2h-3a4.998 4.998 0 0 0 -8.003 .003" />
  <path d="M5 12v-3h13" />
    </svg>
  )
);

CarSuvOutlineLogo.displayName = "CarSuvOutlineLogo";

export const CarSuvOutlineLogoMetadata = {
  id: "car-suv-outline",
  baseId: "car-suv-outline",
  variant: "default",
  name: "Car Suv Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CarSuvOutlineLogo;
