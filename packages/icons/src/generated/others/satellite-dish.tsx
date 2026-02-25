/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface SatelliteDishProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const SatelliteDish = React.forwardRef<SVGSVGElement, SatelliteDishProps>(
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
      <path d="M4 10a7.31 7.31 0 0 0 10 10Z" />
  <path d="m9 15 3-3" />
  <path d="M17 13a6 6 0 0 0-6-6" />
  <path d="M21 13A10 10 0 0 0 11 3" />
    </svg>
  )
);
SatelliteDish.displayName = "SatelliteDish";
export const SatelliteDishMetadata = { 
  id: "satellite-dish", 
  baseId: "satellite-dish", 
  variant: "default", 
  name: "Satellite Dish", 
  category: "others", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default SatelliteDish;
