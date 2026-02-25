/**
 * Auto-generated logo component: Drone Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface DroneOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const DroneOutlineLogo = React.forwardRef<SVGSVGElement, DroneOutlineLogoProps>(
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
      <path d="M10 10h4v4h-4l0 -4" />
  <path d="M10 10l-3.5 -3.5" />
  <path d="M9.96 6a3.5 3.5 0 1 0 -3.96 3.96" />
  <path d="M14 10l3.5 -3.5" />
  <path d="M18 9.96a3.5 3.5 0 1 0 -3.96 -3.96" />
  <path d="M14 14l3.5 3.5" />
  <path d="M14.04 18a3.5 3.5 0 1 0 3.96 -3.96" />
  <path d="M10 14l-3.5 3.5" />
  <path d="M6 14.04a3.5 3.5 0 1 0 3.96 3.96" />
    </svg>
  )
);

DroneOutlineLogo.displayName = "DroneOutlineLogo";

export const DroneOutlineLogoMetadata = {
  id: "drone-outline",
  baseId: "drone-outline",
  variant: "default",
  name: "Drone Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default DroneOutlineLogo;
