/**
 * Auto-generated logo component: Waypoints (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface WaypointsLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const WaypointsLogo = React.forwardRef<SVGSVGElement, WaypointsLogoProps>(
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
      <path d="m10.586 5.414-5.172 5.172" />
  <path d="m18.586 13.414-5.172 5.172" />
  <path d="M6 12h12" />
  <circle cx="12" cy="20" r="2" />
  <circle cx="12" cy="4" r="2" />
  <circle cx="20" cy="12" r="2" />
  <circle cx="4" cy="12" r="2" />
    </svg>
  )
);

WaypointsLogo.displayName = "WaypointsLogo";

export const WaypointsLogoMetadata = {
  id: "waypoints",
  baseId: "waypoints",
  variant: "default",
  name: "Waypoints",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default WaypointsLogo;
