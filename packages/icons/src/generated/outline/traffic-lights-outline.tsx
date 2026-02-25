/**
 * Auto-generated logo component: Traffic Lights Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface TrafficLightsOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const TrafficLightsOutlineLogo = React.forwardRef<SVGSVGElement, TrafficLightsOutlineLogoProps>(
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
      <path d="M7 7a5 5 0 0 1 5 -5a5 5 0 0 1 5 5v10a5 5 0 0 1 -5 5a5 5 0 0 1 -5 -5l0 -10" />
  <path d="M11 7a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
  <path d="M11 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
  <path d="M11 17a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
    </svg>
  )
);

TrafficLightsOutlineLogo.displayName = "TrafficLightsOutlineLogo";

export const TrafficLightsOutlineLogoMetadata = {
  id: "traffic-lights-outline",
  baseId: "traffic-lights-outline",
  variant: "default",
  name: "Traffic Lights Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default TrafficLightsOutlineLogo;
