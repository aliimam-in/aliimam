/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface MapPinOffProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const MapPinOff = React.forwardRef<SVGSVGElement, MapPinOffProps>(
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
      <path d="M12.75 7.09a3 3 0 0 1 2.16 2.16" />
  <path d="M17.072 17.072c-1.634 2.17-3.527 3.912-4.471 4.727a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 1.432-4.568" />
  <path d="m2 2 20 20" />
  <path d="M8.475 2.818A8 8 0 0 1 20 10c0 1.183-.31 2.377-.81 3.533" />
  <path d="M9.13 9.13a3 3 0 0 0 3.74 3.74" />
    </svg>
  )
);
MapPinOff.displayName = "MapPinOff";
export const MapPinOffMetadata = { 
  id: "map-pin-off", 
  baseId: "map-pin-off", 
  variant: "default", 
  name: "Map Pin Off", 
  category: "navigation", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default MapPinOff;
