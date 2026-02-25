/**
 * Auto-generated logo component: Traffic Cone Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface TrafficConeOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const TrafficConeOffOutlineLogo = React.forwardRef<SVGSVGElement, TrafficConeOffOutlineLogoProps>(
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
      <path d="M4 20h16" />
  <path d="M9.4 10h.6m4 0h.6" />
  <path d="M7.8 15h7.2" />
  <path d="M6 20l3.5 -10.5" />
  <path d="M10.5 6.5l.5 -1.5h2l2 6m2 6l1 3" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

TrafficConeOffOutlineLogo.displayName = "TrafficConeOffOutlineLogo";

export const TrafficConeOffOutlineLogoMetadata = {
  id: "traffic-cone-off-outline",
  baseId: "traffic-cone-off-outline",
  variant: "default",
  name: "Traffic Cone Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default TrafficConeOffOutlineLogo;
