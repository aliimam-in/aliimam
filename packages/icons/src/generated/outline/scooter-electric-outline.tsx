/**
 * Auto-generated logo component: Scooter Electric Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ScooterElectricOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ScooterElectricOutlineLogo = React.forwardRef<SVGSVGElement, ScooterElectricOutlineLogoProps>(
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
      <path d="M16 17a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  <path d="M4 17a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  <path d="M8 17h5a6 6 0 0 1 5 -5v-5a2 2 0 0 0 -2 -2h-1" />
  <path d="M10 4l-2 4h3l-2 4" />
    </svg>
  )
);

ScooterElectricOutlineLogo.displayName = "ScooterElectricOutlineLogo";

export const ScooterElectricOutlineLogoMetadata = {
  id: "scooter-electric-outline",
  baseId: "scooter-electric-outline",
  variant: "default",
  name: "Scooter Electric Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ScooterElectricOutlineLogo;
