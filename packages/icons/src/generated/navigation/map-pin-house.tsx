/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface MapPinHouseProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const MapPinHouse = React.forwardRef<SVGSVGElement, MapPinHouseProps>(
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
      <path d="M15 22a1 1 0 0 1-1-1v-4a1 1 0 0 1 .445-.832l3-2a1 1 0 0 1 1.11 0l3 2A1 1 0 0 1 22 17v4a1 1 0 0 1-1 1z" />
  <path d="M18 10a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 .601.2" />
  <path d="M18 22v-3" />
  <circle cx="10" cy="10" r="3" />
    </svg>
  )
);
MapPinHouse.displayName = "MapPinHouse";
export const MapPinHouseMetadata = { 
  id: "map-pin-house", 
  baseId: "map-pin-house", 
  variant: "default", 
  name: "Map Pin House", 
  category: "navigation", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default MapPinHouse;
