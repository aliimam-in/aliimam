/**
 * Auto-generated logo component: Traffic Cone (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface TrafficConeLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const TrafficConeLogo = React.forwardRef<SVGSVGElement, TrafficConeLogoProps>(
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
      <path d="M16.05 10.966a5 2.5 0 0 1-8.1 0" />
  <path d="m16.923 14.049 4.48 2.04a1 1 0 0 1 .001 1.831l-8.574 3.9a2 2 0 0 1-1.66 0l-8.574-3.91a1 1 0 0 1 0-1.83l4.484-2.04" />
  <path d="M16.949 14.14a5 2.5 0 1 1-9.9 0L10.063 3.5a2 2 0 0 1 3.874 0z" />
  <path d="M9.194 6.57a5 2.5 0 0 0 5.61 0" />
    </svg>
  )
);

TrafficConeLogo.displayName = "TrafficConeLogo";

export const TrafficConeLogoMetadata = {
  id: "traffic-cone",
  baseId: "traffic-cone",
  variant: "default",
  name: "Traffic Cone",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default TrafficConeLogo;
