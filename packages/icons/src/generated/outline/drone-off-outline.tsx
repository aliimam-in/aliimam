/**
 * Auto-generated logo component: Drone Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface DroneOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const DroneOffOutlineLogo = React.forwardRef<SVGSVGElement, DroneOffOutlineLogoProps>(
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
      <path d="M14 14h-4v-4" />
  <path d="M10 10l-3.5 -3.5" />
  <path d="M9.957 5.95a3.503 3.503 0 0 0 -2.917 -2.91m-3.02 .989a3.5 3.5 0 0 0 1.98 5.936" />
  <path d="M14 10l3.5 -3.5" />
  <path d="M18 9.965a3.5 3.5 0 1 0 -3.966 -3.965" />
  <path d="M14 14l3.5 3.5" />
  <path d="M14.035 18a3.5 3.5 0 0 0 5.936 1.98m.987 -3.026a3.503 3.503 0 0 0 -2.918 -2.913" />
  <path d="M10 14l-3.5 3.5" />
  <path d="M6 14.035a3.5 3.5 0 1 0 3.966 3.965" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

DroneOffOutlineLogo.displayName = "DroneOffOutlineLogo";

export const DroneOffOutlineLogoMetadata = {
  id: "drone-off-outline",
  baseId: "drone-off-outline",
  variant: "default",
  name: "Drone Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default DroneOffOutlineLogo;
