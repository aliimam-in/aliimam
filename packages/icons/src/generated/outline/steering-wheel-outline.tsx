/**
 * Auto-generated logo component: Steering Wheel Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SteeringWheelOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SteeringWheelOutlineLogo = React.forwardRef<SVGSVGElement, SteeringWheelOutlineLogoProps>(
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
      <path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
  <path d="M10 12a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  <path d="M12 14l0 7" />
  <path d="M10 12l-6.75 -2" />
  <path d="M14 12l6.75 -2" />
    </svg>
  )
);

SteeringWheelOutlineLogo.displayName = "SteeringWheelOutlineLogo";

export const SteeringWheelOutlineLogoMetadata = {
  id: "steering-wheel-outline",
  baseId: "steering-wheel-outline",
  variant: "default",
  name: "Steering Wheel Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SteeringWheelOutlineLogo;
