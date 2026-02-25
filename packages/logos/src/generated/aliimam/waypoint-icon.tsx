/**
 * Auto-generated logo component: Waypoint Icon (default)
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface WaypointIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const WaypointIcon = React.forwardRef<SVGSVGElement, WaypointIconProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 256 167"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g>
        <path d="M256,2.84217094e-14 L224.03875,55.3664326 L192.077501,2.84217094e-14 L256,2.84217094e-14 Z M85.3436667,36.9522887 L64.0155001,36.9522887 L117.335917,129.33301 L96.0077501,166.285299 L0,2.84217094e-14 L106.671833,2.84217094e-14 L160.02325,92.3807217 L170.687333,73.9045774 L128,2.84217094e-14 L170.687333,2.84217094e-14 L192.0155,36.9522887 L213.343667,73.9045774 L160.02325,166.285299 L85.3436667,36.9522887 Z" fill="#14C6CB"></path>
    </g>
    </svg>
  )
);

WaypointIcon.displayName = "WaypointIcon";

export const WaypointIconMetadata = {
  id: "waypoint-icon",
  baseId: "waypoint-icon",
  variant: "default",
  name: "Waypoint Icon",
  category: "aliimam",
  tags: [],
  viewBox: "0 0 256 167",
} as const;

export default WaypointIcon;
