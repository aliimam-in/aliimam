/**
 * Auto-generated logo component: Traffic Cone Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface TrafficConeOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const TrafficConeOutlineLogo = React.forwardRef<SVGSVGElement, TrafficConeOutlineLogoProps>(
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
      <path d="M4 20l16 0" />
  <path d="M9.4 10l5.2 0" />
  <path d="M7.8 15l8.4 0" />
  <path d="M6 20l5 -15h2l5 15" />
    </svg>
  )
);

TrafficConeOutlineLogo.displayName = "TrafficConeOutlineLogo";

export const TrafficConeOutlineLogoMetadata = {
  id: "traffic-cone-outline",
  baseId: "traffic-cone-outline",
  variant: "default",
  name: "Traffic Cone Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default TrafficConeOutlineLogo;
