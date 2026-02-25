/**
 * Auto-generated logo component: Steering Wheel Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SteeringWheelOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SteeringWheelOffOutlineLogo = React.forwardRef<SVGSVGElement, SteeringWheelOffOutlineLogoProps>(
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
      <path d="M20.04 16.048a9 9 0 0 0 -12.083 -12.09m-2.32 1.678a9 9 0 1 0 12.737 12.719" />
  <path d="M10.595 10.576a2 2 0 1 0 2.827 2.83" />
  <path d="M12 14v7" />
  <path d="M10 12l-6.75 -2" />
  <path d="M15.542 11.543l5.208 -1.543" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

SteeringWheelOffOutlineLogo.displayName = "SteeringWheelOffOutlineLogo";

export const SteeringWheelOffOutlineLogoMetadata = {
  id: "steering-wheel-off-outline",
  baseId: "steering-wheel-off-outline",
  variant: "default",
  name: "Steering Wheel Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SteeringWheelOffOutlineLogo;
