/**
 * Auto-generated logo component: Steering Wheel Filled (default)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SteeringWheelFilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SteeringWheelFilledLogo = React.forwardRef<SVGSVGElement, SteeringWheelFilledLogoProps>(
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
      <path d="M17 3.34a10 10 0 1 1 -15 8.66l.005 -.324a10 10 0 0 1 14.995 -8.336m-13 8.66a8 8 0 0 0 7 7.937v-5.107a3 3 0 0 1 -1.898 -2.05l-5.07 -1.504q -.031 .36 -.032 .725m15.967 -.725l-5.069 1.503a3 3 0 0 1 -1.897 2.051v5.108a8 8 0 0 0 6.985 -8.422zm-11.967 -6.204a8 8 0 0 0 -3.536 4.244l4.812 1.426a3 3 0 0 1 5.448 0l4.812 -1.426a8 8 0 0 0 -11.536 -4.244" />
    </svg>
  )
);

SteeringWheelFilledLogo.displayName = "SteeringWheelFilledLogo";

export const SteeringWheelFilledLogoMetadata = {
  id: "steering-wheel-filled",
  baseId: "steering-wheel-filled",
  variant: "default",
  name: "Steering Wheel Filled",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SteeringWheelFilledLogo;
