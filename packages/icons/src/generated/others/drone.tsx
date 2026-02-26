/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface DroneProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Drone = React.forwardRef<SVGSVGElement, DroneProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg 
      ref={ref}
      width={size}
      height={size} 
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...(strokeWidth !== undefined ? { strokeWidth } : {})}
      {...props}
    >
      <path d="M10 10 7 7" />
  <path d="m10 14-3 3" />
  <path d="m14 10 3-3" />
  <path d="m14 14 3 3" />
  <path d="M14.205 4.139a4 4 0 1 1 5.439 5.863" />
  <path d="M19.637 14a4 4 0 1 1-5.432 5.868" />
  <path d="M4.367 10a4 4 0 1 1 5.438-5.862" />
  <path d="M9.795 19.862a4 4 0 1 1-5.429-5.873" />
  <rect x="10" y="8" width="4" height="8" rx="1" />
    </svg>
  )
);
Drone.displayName = "Drone";
export const DroneMetadata = { 
  id: "drone", 
  baseId: "drone", 
  variant: "default", 
  name: "Drone", 
  category: "others", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Drone;
