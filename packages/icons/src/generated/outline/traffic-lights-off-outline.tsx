/**
 * Auto-generated logo component: Traffic Lights Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface TrafficLightsOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const TrafficLightsOffOutlineLogo = React.forwardRef<SVGSVGElement, TrafficLightsOffOutlineLogoProps>(
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
      <path d="M8 4c.912 -1.219 2.36 -2 4 -2a5 5 0 0 1 5 5v6m0 4a5 5 0 0 1 -10 0v-10" />
  <path d="M12 8a1 1 0 1 0 -1 -1" />
  <path d="M11.291 11.295a1 1 0 0 0 1.418 1.41" />
  <path d="M11 17a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

TrafficLightsOffOutlineLogo.displayName = "TrafficLightsOffOutlineLogo";

export const TrafficLightsOffOutlineLogoMetadata = {
  id: "traffic-lights-off-outline",
  baseId: "traffic-lights-off-outline",
  variant: "default",
  name: "Traffic Lights Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default TrafficLightsOffOutlineLogo;
